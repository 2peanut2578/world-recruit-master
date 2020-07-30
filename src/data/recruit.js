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
      paragraphs: [
          {
            image: { src: "anh1.jfif", alt: "" },
            title: "ABC",
            description:
              "未経験で不安だったけど、周りの先輩たちの指導のおかげで毎日充実しています。私はウェブサイト作成の実務経験がなかなかやりたい仕事を見つけるのが難しいと思います。最初は、未経験者であることから不安もありましたが、周りの先輩が丁寧、親身になって教えて頂くので安心して働いています。あと、自分から頑張って、どんどん技術を身に着けて、毎日が充実しています。",
            
          },
          {
            image: { src: "anh1.jfif", alt: "" },
            title:"DFJ",
            description:
              "これから自分が働く職場は一体何をしているのか、という事を実際に手を動かして体験できてよかったです。自分の現段階のスキルや、自分に足りないところの認識もできました。全部署の仕事を、実際に体験させてもらうことで、入社してから自分が一体何をしていきたいのか？を再確認できた有意義な時間でした。",
            
          },
          {
            image: { src: "anh1.jfif", alt: "" },
            title:"GH",
            description:
              "aaaa",
            
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
