import axios from "axios";

// https://uniq-backend.onrender.com/api/
export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/api/";

export const imgUrl = "http://localhost:3000/";

let apiCalled = false;

export const POST = async (url, data) => {
  if (apiCalled) {
    return Promise.reject("API already called once");
  }

  const token = localStorage.getItem("token") || "{}";
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    apiCalled = true;
    return await axios
      .post(url, data, config)
      .then((result) => {
        if (result) {
          if (result?.statusCode === 401) {
            localStorage.clear();
            window.location.href = "/auth/signin";
          }
          throw result;
        } else {
          return result;
        }
      })
      .catch((error) => {
        return error;
      })
      .finally(() => {
        apiCalled = false;
      });
  } catch (error) {
    return error;
  }
};

export const AUTH = async (url, data) => {
  try {
    return await axios
      .post(url, data)
      .then((result) => {
        if (result && result.data && result.data.token) {
          // const token = result.data.token;
          // localStorage.setItem("token", token);
          return result;
        } else {
          throw result;
        }
      })
      .catch((error) => {
        return error;
      });
  } catch (error) {
    return error;
  }
};

export const GET = async (url, data) => {
  const token = localStorage.getItem("token") || "{}";

  const queryParams = new URLSearchParams(data).toString();
  const requestUrl = queryParams ? `${url}${data}` : url;
  try {
    let config = {
      maxBodyLength: Infinity,
      headers: {
        // "Content-Type": "application/json",
      },
      // cache: "force-cache",
    };

    return await fetch(requestUrl, config)
      .then((result) => result.json())
      .then((result) => {
        if (result) {
          if (result?.statusCode === 401) {
            localStorage.clear();
            window.location.href = "/auth/signin";
          }
          return result;
        } else {
          throw result;
        }
      })
      .catch((error) => {
        return error;
      });
  } catch (error) {
    return error;
  }
};

export const DELETE = async (url) => {
  const token = localStorage.getItem("token") || "{}";

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return await axios
      .delete(url, config)
      .then((result) => {
        if (result) {
          if (result?.statusCode === 401) {
            localStorage.clear();
            window.location.href = "/nawee/admin/auth/sign-in";
          }
          return result;
        } else {
          throw result;
        }
      })
      .catch((error) => {
        return error;
      });
  } catch (error) {
    return error;
  }
};

export const UPDATE = async (url, data) => {
  const token = localStorage.getItem("token") || "{}";

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    return await axios
      .patch(url, data, config)
      .then((result) => {
        if (result) {
          if (result?.statusCode === 401) {
            localStorage.clear();
            window.location.href = "/auth/signin";
          }
          return result;
        } else {
          throw result;
        }
      })
      .catch((error) => {
        return error;
      });
  } catch (error) {
    return error;
  }
};
