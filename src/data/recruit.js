const RecruitJSON = {
  pageInfo: {
    title: "World Recruitment",
    description: "",
  },
  header: {
    images: [
      { src: "", alt: "" },
      { src: "", alt: "" },
    ],
  },
  sections: [
    {
      type: "Description",
      heading: "Khai quat ve cong ty",
      content: "",
    },
    {
      type: "Image",
      src: "globe.jpg",
      alt: "World logo",
    },
    {
      type: "TextList",
      heading: "Ly do chon cong ty",
      items: ["Che do 1", "Che do 2"],
    },
    {
      type: "ViewList",
      heading: "Cam nhan cua nguoi cong ty",
      items: [
        {
          image: { src: "", alt: "" },
          heading: "",
          content: "",
        },
      ],
    },
    {
      type:"Form",
      action: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfGnBVVx08IipMbyW8ZKKhh-RirPIbxJKqHF0DJVnE1QWCIOw/formResponse",
      items:[
        {
          type:"text",
          name:"entry.1781500597",
          placeholder:"名前"
        },

        {
          type:"text",
          name:"entry.1640447617",
          placeholder:"性別"
        },

        {
          type:"text",
          name:"entry.297979220",
          placeholder:"生年月日"
        },

        {
          type:"text",
          name:"entry.1078004677",
          placeholder:"住所"
        },

        {
          type:"text",
          name:"entry.2040870261",
          placeholder:"メール"
        },

        {
          type:"text",
          name:"entry.1916706626",
          placeholder:"電話番号"
        },

        {
          type:"text",
          name:"entry.324267323",
          placeholder:"大学名、学科"
        },

        {
          type:"text",
          name:"entry.340482159",
          placeholder:"日本語レベル"
        },
        {
          type:"text",
          name:"entry.86165619",
          placeholder:"職歴"
        }
              ]
    },
  ],
};

export default RecruitJSON;
