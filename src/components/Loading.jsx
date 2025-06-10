import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

export default function Loading() {
  return (
    <Stack
      width="100%"
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CircularProgress size={120} />
    </Stack>
  );
}
