import React from "react";
import TitleBanner from "../../components/titleBanner";

function page() {
  return (
    <div>
      <TitleBanner
        img="/assets/getInvolvedPageBanner.png"
        subheader="Get Involved"
        header="Contribute to SKYES' mission by actively mentoring, sponsoring, or joining us!"
        button={false}
      />
    </div>
  );
}

export default page;
