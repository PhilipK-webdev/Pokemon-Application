import Skeleton from "@mui/material/Skeleton";
import { useMediaQuery } from "@mui/material";
const CustomSkeleton = () => {
  const mobile = useMediaQuery("(max-width:1250px)");
  return (
    <>
      <Skeleton
        variant="rounded"
        width={150}
        height={50}
        style={{ marginLeft: "10px" }}
      />
      {Array.from({ length: 10 }, (_, index) => (
        <Skeleton
          variant="rounded"
          width={mobile ? 400 : 800}
          height={mobile ? 120 : 193}
          key={index}
          className="skeleton-pokemons"
        />
      ))}
    </>
  );
};

export default CustomSkeleton;
