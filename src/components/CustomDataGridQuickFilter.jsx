import {
  GridPortalWrapper,
  QuickFilter,
  QuickFilterControl,
} from "@mui/x-data-grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Portal from "@mui/material/Portal";
import Select from "@mui/material/Select";

export default function CustomDataGridQuickFilter({ options }) {
  return (
    <Portal container={() => document.getElementById("filter-panel")}>
      <GridPortalWrapper>
        <QuickFilter expanded>
          <QuickFilterControl
            render={({ ref, ...other }) => (
              <>
                <InputLabel>Ürün</InputLabel>
                <Select {...other} id="productId" inputRef={ref} label="Ürün">
                  <MenuItem value="All">Tümü</MenuItem>
                  {options?.data?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </>
            )}
          />
        </QuickFilter>
      </GridPortalWrapper>
    </Portal>
  );
}
