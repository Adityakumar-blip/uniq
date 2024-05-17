import React from "react";

const ProjectDescription = () => {
  return (
    <div className="flex gap-6 py-16 px-16 h-max dark:bg-black bg-white">
      <div className="w-8/12">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-4xl font-bold">Sample Project Title</p>
            <p className="mt-2 text-gray-400">Launched on July 1 2029</p>
          </div>
          <button className="btn btn-primary text-white mr-6">
            Start Contribute
          </button>
        </div>

        {/* project description section */}
        <div className="mt-4">
          <p className="text-xl font-semibold">Description</p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis
            purus sit amet volutpat consequat mauris nunc. Cursus euismod quis
            viverra nibh. Sollicitudin aliquam ultrices sagittis orci a
            scelerisque purus. Enim nunc faucibus a pellentesque sit amet
            porttitor. Facilisis volutpat est velit egestas dui id ornare arcu.
            Nisl condimentum id venenatis a condimentum vitae sapien. Rhoncus
            mattis rhoncus urna neque viverra justo nec. Imperdiet dui accumsan
            sit amet nulla facilisi morbi tempus. Sollicitudin nibh sit amet
            commodo nulla facilisi nullam vehicula ipsum. Sit amet est placerat
            in egestas erat. At auctor urna nunc id cursus metus aliquam.
            Tincidunt arcu non sodales neque sodales ut. Pulvinar etiam non quam
            lacus suspendisse faucibus interdum posuere lorem.
          </p>
        </div>

        {/* contributos section  */}
        <div className="mt-4">
          <p className="text-xl font-semibold">Contributors</p>
          <div class="flex mb-3 mt-3 -space-x-2 rtl:space-x-reverse">
            <img
              class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <img
              class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
              src="https://images.unsplash.com/photo-1627161683077-e34782c24d81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <img
              class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
              src="https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWRzaG90fGVufDB8fDB8fHww"
              alt=""
            />
            <img
              class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
              src="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww"
              alt=""
            />
            <img
              class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhlYWRzaG90fGVufDB8fDB8fHww"
              alt=""
            />
            <a
              class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-400 border-2 border-white rounded-full hover:bg-gray-500 dark:border-gray-800"
              href="#"
            >
              +3
            </a>
          </div>
        </div>

        {/* project progress section  */}
        <div className="mt-4">
          <p className="text-xl font-semibold">Progress</p>
          <div class="w-[80%] bg-gray-200 mt-4 rounded-full h-2.5 dark:bg-gray-700">
            <div
              class="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>

        {/* project links section */}
        <div className="w-[80%] mt-6">
          <p className="text-xl font-semibold">Project Links</p>
          <div className="flex mt-4 items-center justify-between">
            <div>
              <p className="text-md font-semibold">Figma Design Files</p>
              <p className="text-xs text-gray-400">
                View and comment on the latest designs
              </p>
            </div>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="invert"
            >
              <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
            </svg>
          </div>
          <div className="flex mt-4 items-center justify-between">
            <div>
              <p className="text-md font-semibold">Insipiration Sources</p>
              <p className="text-xs text-gray-400">
                Explore the sources of our design insipiration
              </p>
            </div>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="invert"
            >
              <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
            </svg>
          </div>
          <div className="flex mt-4 items-center justify-between">
            <div>
              <p className="text-md font-semibold">Project Resources</p>
              <p className="text-xs text-gray-400">
                Access all the project-related documents and assets
              </p>
            </div>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="invert"
            >
              <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-4/12">
        <div className="flex items-center gap-2  font-semibold">
          <img
            class="w-12 h-12 border-2 border-white rounded-full dark:border-gray-800"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <div>
            <p className="text-xl">Aditya Kumar</p>
            <p className="text-sm text-gray-500">Software Developer</p>
          </div>
        </div>
        <p className="mt-6 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="divider"></div>
        <div>
          <p className="text-2xl font-semibold">Project Tags</p>
          <div className="flex gap-2 flex-wrap mt-4">
            <div className="badge badge-primary">React.js</div>
            <div className="badge badge-primary">Next.js</div>
            <div className="badge badge-primary">Firebase</div>
            <div className="badge badge-primary">Socket</div>
            <div className="badge badge-primary">Websocket</div>
            <div className="badge badge-primary">javascript</div>
            <div className="badge badge-primary">Nodejs</div>
            <div className="badge badge-primary">Expressjs</div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <p className="text-2xl font-semibold">Languages</p>
          <div className="flex gap-2 flex-wrap mt-4">
            <div className="badge badge-primary">React.js</div>
            <div className="badge badge-primary">Next.js</div>
            <div className="badge badge-primary">Firebase</div>
            <div className="badge badge-primary">Socket</div>
            <div className="badge badge-primary">Websocket</div>
            <div className="badge badge-primary">javascript</div>
            <div className="badge badge-primary">Nodejs</div>
            <div className="badge badge-primary">Expressjs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
