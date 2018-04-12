// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  blogApi:{
    baseUrl: "http://jsonplaceholder.typicode.com/",
    posts: "posts", // Get All Posts
    post: "posts", // Get Single Post
    users: "users", // Get All Users
    user: "users" // Get Single User
  }
};
