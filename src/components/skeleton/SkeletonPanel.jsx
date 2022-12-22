import Skeleton from "@mui/material/Skeleton";

const SkeletonPanel = ({h}) => {
  return (
    <Skeleton
      sx={{ bgcolor: "grey.500" }}
      variant="rectangular"
      width={"100%"}
      height={h}
    />
  );
};

export default SkeletonPanel;
