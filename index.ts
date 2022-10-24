import axios from "axios";

interface WRS_AUTH {
  API_KEY: string;
  API_SECRET: string;
  PROJECT_KEY: string;
}

interface WRS_CONFIG {
  auth: WRS_AUTH;
}

interface CONTROLLERS {
  testController: (data: baseData) => Promise<void>;
}

interface WRS {
  config: WRS_CONFIG;
  controllers: CONTROLLERS;
}

interface baseData {
  config: WRS_CONFIG;
  id: string;
}

const testController = async (data: baseData) => {
  console.log("jejjejeje");

  try {
    const res = await axios.post(
      `http://localhost:9000/auth/user/6345`,
      data.config
    );
    console.log(res, "heheheheh, here is the big man!");
  } catch (err) {
    console.log(err, "error in package request");
  }
};

const wrs: WRS = {
  config: {
    auth: {
      API_KEY: "",
      API_SECRET: "",
      PROJECT_KEY: "",
    },
  },
  controllers: {
    testController,
  },
};

export default wrs;
