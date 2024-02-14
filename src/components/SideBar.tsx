import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

type SideBarProps = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const SideBar = ({ selected, setSelected }: SideBarProps) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background: category.name === selected ? "#FC1503" : "",
            color: "white",
          }}
          key={category.name}
          onClick={() => setSelected(category.name)}
        >
          <span
            style={{
              color: category.name === selected ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {<category.icon />}
          </span>
          <span
            style={{
              opacity: category.name === selected ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
