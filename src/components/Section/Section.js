import { Box } from "@mui/material";
import { SideBarSection } from "./SideBarSection";
import ProductSection from "./ProductSection";
import "./Section.css";

export function Section(props) {
  const { getProducts, handleAddProduct } = props;

  return (
    <Box>
      <SideBarSection />
      <ProductSection
        getProducts={getProducts}
        handleAddProduct={handleAddProduct}
      />
    </Box>
  );
}
