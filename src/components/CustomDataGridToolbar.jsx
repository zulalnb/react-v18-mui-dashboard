import { FilterPanelTrigger, Toolbar, ToolbarButton } from "@mui/x-data-grid";
import FilterListIcon from "@mui/icons-material/FilterList";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";

export default function CustomDataGridToolbar({ setFilterButtonEl }) {
  return (
    <Toolbar style={{ justifyContent: "start" }}>
      <Tooltip title="Filtreleri Göster">
        <FilterPanelTrigger
          ref={setFilterButtonEl}
          render={(triggerProps, state) => (
            <ToolbarButton {...triggerProps} color="default">
              <Badge
                badgeContent={state.filterCount}
                color="primary"
                variant="dot"
              >
                <FilterListIcon fontSize="small" />
              </Badge>
            </ToolbarButton>
          )}
        />
      </Tooltip>
    </Toolbar>
  );
}
