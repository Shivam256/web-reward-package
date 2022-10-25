import axios from "axios";

interface WRS_AUTH {
  API_KEY: string;
  API_SECRET: string;
  PROJECT_KEY: string;
}

interface WRS_CONFIG {
  auth: WRS_AUTH;
}


const wrs = (config: WRS_CONFIG) => {
  const controllers = {
    testController: async () => {
      try {
        const res = await axios.post(
          `http://localhost:9000/auth/user`,
          config.auth
        );
        console.log(res.data, "here is the big man");
      } catch (err) {
        console.log(err, "error in package request");
      }
    },
  };

  return {
    controllers,
  };
};

export = {
  wrs,
};
