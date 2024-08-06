import { GetDiscussionByCategory } from "@/Store/Reducers/ForumSlice";
import ForumsByCategroy from "@/views/Forum/ForumsByCategroy";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { categoryId } = router.query;

  useEffect(() => {
    if (categoryId) {
      dispatch(GetDiscussionByCategory(categoryId));
    }
  }, [categoryId]);

  return (
    <div>
      <ForumsByCategroy />
    </div>
  );
};

export default index;
