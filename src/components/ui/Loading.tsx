import { Stack } from "@mui/material";
import loading from "../../assets/images/loding.gif";

const Loading = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="row"
      minHeight={{
        lg: 600,
        md: 450,
        sm: 350,
        xs: 300,
      }}
    >
      <img
        src={loading}
        alt="loading"
        style={{ width: "200px", height: "200px" }}
      />
    </Stack>
  );
};

export default Loading;
