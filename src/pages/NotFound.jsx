import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  return (
    <Stack
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      spacing={2}
    >
      <Typography variant="h2">Sayfa Bulunamadı.</Typography>
      <Button variant="contained" to="/">
        Ana Sayfaya Dön
      </Button>
    </Stack>
  );
}
