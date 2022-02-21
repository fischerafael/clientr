import React from "react";

import { TemplatePagePublic } from "../../components/Templates/TemplatePublicPage";
import { LeftSection } from "./components/LeftSection";

export const PagePublic = () => {
  return <TemplatePagePublic leftSection={<LeftSection />} />;
};
