import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DashboardContentWrapper from "@dashboard/components/DashboardContentWrapper";
import Header from "@dashboard/components/Header";

export default function Home() {
  return (
    <DashboardContentWrapper>
      <Header title="Overview" />
      <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
          Overview
        </Typography>
        <Grid
          container
          spacing={2}
          columns={12}
          sx={{ mb: (theme) => theme.spacing(2) }}
        ></Grid>
      </Box>
    </DashboardContentWrapper>
  );
}
