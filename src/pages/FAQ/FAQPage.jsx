import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import component
import PanelLayout from "../../components/PanelLayout/PanelLayout";
import Title from "../../components/Title/Title";
import BoxLayout from "../../components/BoxLayout/BoxLayout";

import { useGetApi } from "../../hooks/useGetApi";
import Loading from "../../components/Loading/Loading";

const FAQPage = () => {
  const { data, isLoading } = useGetApi(["FAQ"], "/FAQ");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PanelLayout>
      <BoxLayout justify="start">
        <Title>FAQ Page</Title>
      </BoxLayout>
      {data.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </PanelLayout>
  );
};

export default FAQPage;
