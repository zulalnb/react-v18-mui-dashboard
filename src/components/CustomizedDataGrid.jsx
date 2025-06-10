import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { darken, keyframes, lighten, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CustomDataGridToolbar from "./CustomDataGridToolbar";
import CustomDataGridFilterPanel from "./CustomDataGridFilterPanel";

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .no-rows-primary": {
    fill: "#3D4751",
    ...theme.applyStyles("light", {
      fill: "#AEB8C2",
    }),
  },
  "& .no-rows-secondary": {
    fill: "#1D2126",
    ...theme.applyStyles("light", {
      fill: "#E8EAED",
    }),
  },
}));
function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={96}
        viewBox="0 0 452 257"
        aria-hidden
        focusable="false"
      >
        <path
          className="no-rows-primary"
          d="M348 69c-46.392 0-84 37.608-84 84s37.608 84 84 84 84-37.608 84-84-37.608-84-84-84Zm-104 84c0-57.438 46.562-104 104-104s104 46.562 104 104-46.562 104-104 104-104-46.562-104-104Z"
        />
        <path
          className="no-rows-primary"
          d="M308.929 113.929c3.905-3.905 10.237-3.905 14.142 0l63.64 63.64c3.905 3.905 3.905 10.236 0 14.142-3.906 3.905-10.237 3.905-14.142 0l-63.64-63.64c-3.905-3.905-3.905-10.237 0-14.142Z"
        />
        <path
          className="no-rows-primary"
          d="M308.929 191.711c-3.905-3.906-3.905-10.237 0-14.142l63.64-63.64c3.905-3.905 10.236-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142l-63.64 63.64c-3.905 3.905-10.237 3.905-14.142 0Z"
        />
        <path
          className="no-rows-secondary"
          d="M0 10C0 4.477 4.477 0 10 0h380c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 20 0 15.523 0 10ZM0 59c0-5.523 4.477-10 10-10h231c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 69 0 64.523 0 59ZM0 106c0-5.523 4.477-10 10-10h203c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 153c0-5.523 4.477-10 10-10h195.5c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 200c0-5.523 4.477-10 10-10h203c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 247c0-5.523 4.477-10 10-10h231c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10Z"
        />
      </svg>
      <Box sx={{ mt: 2 }}>Sonuç bulunamadı</Box>
    </StyledGridOverlay>
  );
}

const pulseAnimation = keyframes`
  0% {
    background-color: var(--pulse-bg-light);
  }
  50% {
    background-color: var(--pulse-bg-light-highlight);
  }
  100% {
    background-color: var(--pulse-bg-light);
  }
`;

const pulseAnimationDark = keyframes`
  0% {
    background-color: var(--pulse-bg-dark);
  }
  50% {
    background-color: var(--pulse-bg-dark-highlight);
  }
  100% {
    background-color: var(--pulse-bg-dark);
  }
`;

const getBackgroundColor = (color, theme, coefficient) => {
  const lightColor = lighten(color, coefficient);
  const lightHighlight = lighten(color, coefficient - 0.3);
  const darkColor = darken(color, coefficient);
  const darkHighlight = darken(color, coefficient + 0.3);

  return {
    "--pulse-bg-light": lightColor,
    "--pulse-bg-light-highlight": lightHighlight,
    "--pulse-bg-dark": darkColor,
    "--pulse-bg-dark-highlight": darkHighlight,
    backgroundColor: darkColor,
    animation: `${pulseAnimationDark} 1.5s infinite alternate ease-in-out`,
    ...theme.applyStyles("light", {
      backgroundColor: lightColor,
      animation: `${pulseAnimation} 1.5s infinite alternate ease-in-out`,
    }),
  };
};

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .super-app-theme--Pending": {
    ...getBackgroundColor(theme.palette.warning.main, theme, 0.7),
    "&:hover": {
      ...getBackgroundColor(theme.palette.warning.main, theme, 0.6),
    },
  },
  "& .super-app-theme--Ready": {
    ...getBackgroundColor(theme.palette.success.main, theme, 0.7),
    "&:hover": {
      ...getBackgroundColor(theme.palette.success.main, theme, 0.6),
    },
  },
  "& .super-app-theme--Failed": {
    ...getBackgroundColor(theme.palette.error.main, theme, 0.7),
    "&:hover": {
      ...getBackgroundColor(theme.palette.error.main, theme, 0.6),
    },
  },
}));

export default function CustomizedDataGrid({
  rows,
  columns,
  totalSize,
  loading,
  page,
  onPaginationModelChange,
  pageSize = 20,
  autoPageSize = false,
  slots,
  ...props
}) {
  const [filterButtonEl, setFilterButtonEl] = useState(null);

  return (
    <StyledDataGrid
      rows={rows}
      columns={columns}
      rowCount={totalSize || 0}
      loading={loading}
      paginationMode="server"
      paginationModel={autoPageSize ? undefined : { page: page - 1, pageSize }}
      onPaginationModelChange={
        autoPageSize ? undefined : onPaginationModelChange
      }
      pageSizeOptions={autoPageSize ? undefined : [pageSize]}
      filterMode="server"
      autoPageSize={autoPageSize}
      disableColumnResize
      disableColumnMenu
      disableRowSelectionOnClick
      disableColumnSorting
      density="compact"
      slots={{
        noRowsOverlay: CustomNoRowsOverlay,
        pagination: autoPageSize ? () => null : undefined,
        footer: autoPageSize ? () => null : undefined,
        toolbar: slots?.toolbar || CustomDataGridToolbar,
        filterPanel: slots?.filterPanel || CustomDataGridFilterPanel,
        ...slots,
      }}
      slotProps={{
        panel: {
          target: filterButtonEl,
        },
        toolbar: { setFilterButtonEl },
      }}
      localeText={{
        toolbarFilters: "Filtreler",
        filterPanelOperator: "Operatör",
        filterPanelColumns: "Sütunlar",
        filterPanelInputLabel: "Değer",
        filterPanelInputPlaceholder: "Filtre değeri",
        filterOperatorContains: "içerir",
        filterOperatorStartsWith: "ile Başlar",
        filterOperatorEndsWith: "ile Biter",
        filterOperatorIs: "eşittir",
        filterValueAny: "Tümü",
        filterValueTrue: "Evet",
        filterValueFalse: "Hayır",
        booleanCellTrueLabel: "evet",
        booleanCellFalseabel: "hayır",
        paginationDisplayedRows: ({ from, to, count }) =>
          `${
            count === -1 ? `${to}'dan daha fazlasının` : count
          } içerisinden ${from} - ${to} arası`,
      }}
      showColumnVerticalBorder
      {...props}
    />
  );
}
