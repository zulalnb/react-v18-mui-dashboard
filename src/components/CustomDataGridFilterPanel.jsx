import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { GridFilterPanel } from "@mui/x-data-grid";
import { useDateRange } from "@dashboard/contexts/DateRangeContext";

export default function CustomDataGridFilterPanel({ props }) {
  const filterPanelRef = useRef(null);
  const { dateRangeSelected } = useDateRange();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (filterPanelRef.current) {
      const deleteFilterButton = filterPanelRef.current.querySelector(
        'button[aria-label="Delete"]'
      );

      if (deleteFilterButton) {
        const handleDeleteButtonClick = () => {
          setSearchParams({});
          navigate("");
        };

        deleteFilterButton.addEventListener("click", handleDeleteButtonClick);

        return () => {
          deleteFilterButton.removeEventListener(
            "click",
            handleDeleteButtonClick
          );
        };
      }
    }
  }, []);

  return (
    <GridFilterPanel
      ref={filterPanelRef}
      filterFormProps={{
        operatorInputProps: {
          style: { display: "none" },
        },
      }}
      sx={{
        "& .MuiDataGrid-filterFormValueInput": {
          width: dateRangeSelected ? 250 : 190,
        },
      }}
      {...props}
    />
  );
}
