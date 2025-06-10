import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { svgIconClasses } from "@mui/material/SvgIcon";
import { toggleButtonGroupClasses } from "@mui/material/ToggleButtonGroup";
import { toggleButtonClasses } from "@mui/material/ToggleButton";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { gray, brand, red, green, orange } from "../themePrimitives";

// eslint-disable-next-line react-refresh/only-export-components
const LinkBehavior = React.forwardRef(function LinkBehavior(props, ref) {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

export const inputsCustomizations = {
  MuiLink: {
    defaultProps: {
      component: LinkBehavior,
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableTouchRipple: true,
      disableRipple: true,
      LinkComponent: LinkBehavior,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        boxSizing: "border-box",
        transition: "all 100ms ease-in",
        "&:focus-visible": {
          outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
          outlineOffset: "2px",
        },
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: "none",
        borderRadius: (theme.vars || theme).shape.borderRadius,
        textTransform: "none",
        variants: [
          {
            props: {
              size: "small",
            },
            style: {
              height: "2.25rem",
              padding: "8px 12px",
            },
          },
          {
            props: {
              size: "medium",
            },
            style: {
              height: "2.5rem", // 40px
            },
          },
          {
            props: {
              variant: "contained",
            },
            style: {
              "&:disabled": {
                backgroundImage: "none",
                border: "0px",
              },
            },
          },
          {
            props: {
              color: "primary",
              variant: "contained",
            },
            style: {
              color: "white",
              backgroundColor: gray[900],
              backgroundImage: `linear-gradient(to bottom, ${gray[700]}, ${gray[800]})`,
              boxShadow: `inset 0 1px 0 ${gray[600]}, inset 0 -1px 0 1px hsl(220, 0%, 0%)`,
              border: `1px solid ${gray[700]}`,
              "&:hover": {
                backgroundImage: "none",
                backgroundColor: gray[700],
                boxShadow: "none",
              },
              "&:active": {
                backgroundColor: gray[800],
              },
              ...theme.applyStyles("dark", {
                color: "black",
                backgroundColor: gray[50],
                backgroundImage: `linear-gradient(to bottom, ${gray[100]}, ${gray[50]})`,
                boxShadow: "inset 0 -1px 0  hsl(220, 30%, 80%)",
                border: `1px solid ${gray[50]}`,
                "&:hover": {
                  backgroundImage: "none",
                  backgroundColor: gray[300],
                  boxShadow: "none",
                },
                "&:active": {
                  backgroundColor: gray[400],
                },
              }),
            },
          },
          {
            props: {
              color: "secondary",
              variant: "contained",
            },
            style: {
              color: "white",
              backgroundColor: brand[300],
              backgroundImage: `linear-gradient(to bottom, ${alpha(
                brand[400],
                0.8
              )}, ${brand[500]})`,
              boxShadow: `inset 0 2px 0 ${alpha(
                brand[200],
                0.2
              )}, inset 0 -2px 0 ${alpha(brand[700], 0.4)}`,
              border: `1px solid ${brand[500]}`,
              "&:hover": {
                backgroundColor: brand[700],
                boxShadow: "none",
              },
              "&:active": {
                backgroundColor: brand[700],
                backgroundImage: "none",
              },
            },
          },
          {
            props: {
              color: "error",
              variant: "contained",
            },
            style: {
              color: "white",
              backgroundColor: red[400],
              backgroundImage: `linear-gradient(to bottom, ${alpha(
                red[300],
                0.8
              )}, ${red[500]})`,
              boxShadow: `inset 0 2px 0 ${alpha(
                red[200],
                0.2
              )}, inset 0 -2px 0 ${alpha(red[600], 0.4)}`,
              border: `1px solid ${red[500]}`,
              "&:hover": {
                backgroundColor: red[600],
                boxShadow: "none",
              },
              "&:active": {
                backgroundColor: red[700],
                backgroundImage: "none",
              },
            },
          },
          {
            props: {
              color: "warning",
              variant: "contained",
            },
            style: {
              color: "hsl(45, 100%, 10%)",
              backgroundColor: orange[400],
              backgroundImage: `linear-gradient(to bottom, ${alpha(
                orange[300],
                0.8
              )}, ${orange[500]})`,
              boxShadow: `inset 0 2px 0 ${alpha(
                orange[200],
                0.3
              )}, inset 0 -2px 0 ${alpha(orange[600], 0.3)}`,
              border: `1px solid ${orange[500]}`,
              "&:hover": {
                backgroundColor: orange[500],
                boxShadow: "none",
              },
              "&:active": {
                backgroundColor: orange[600],
                backgroundImage: "none",
              },
            },
          },
          {
            props: {
              color: "info",
              variant: "contained",
            },
            style: {
              color: "white",
              backgroundColor: brand[400],
              backgroundImage: `linear-gradient(to bottom, ${alpha(
                brand[300],
                0.6
              )}, ${brand[600]})`,
              boxShadow: `inset 0 1px 0 ${alpha(
                brand[100],
                0.3
              )}, inset 0 -1px 0 ${alpha(brand[700], 0.2)}`,
              border: `1px solid ${brand[400]}`,
              "&:hover": {
                backgroundColor: brand[500],
                boxShadow: "none",
              },
              "&:active": {
                backgroundColor: brand[600],
                backgroundImage: "none",
              },
            },
          },
          {
            props: {
              color: "success",
              variant: "contained",
            },
            style: {
              color: "white",
              backgroundColor: green[500],
              backgroundImage: `linear-gradient(to bottom, ${alpha(
                green[400],
                0.8
              )}, ${green[600]})`,
              boxShadow: `inset 0 2px 0 ${alpha(
                green[300],
                0.3
              )}, inset 0 -2px 0 ${alpha(green[700], 0.4)}`,
              border: `1px solid ${green[600]}`,
              "&:hover": {
                backgroundColor: green[700],
                boxShadow: "none",
              },
              "&:active": {
                backgroundColor: green[800],
                backgroundImage: "none",
              },
            },
          },
          {
            props: {
              variant: "outlined",
            },
            style: {
              color: (theme.vars || theme).palette.text.primary,
              border: "1px solid",
              borderColor: gray[200],
              backgroundColor: alpha(gray[50], 0.3),
              "&:hover": {
                backgroundColor: gray[100],
                borderColor: gray[300],
              },
              "&:active": {
                backgroundColor: gray[200],
              },
              "&:disabled": {
                backgroundColor: "transparent",
              },
              ...theme.applyStyles("dark", {
                backgroundColor: gray[800],
                borderColor: gray[700],
                "&:hover": {
                  backgroundColor: gray[900],
                  borderColor: gray[600],
                },
                "&:active": {
                  backgroundColor: gray[900],
                },
              }),
            },
          },
          {
            props: {
              color: "secondary",
              variant: "outlined",
            },
            style: {
              color: brand[700],
              border: "1px solid",
              borderColor: brand[200],
              backgroundColor: brand[50],
              "&:hover": {
                backgroundColor: brand[100],
                borderColor: brand[400],
              },
              "&:active": {
                backgroundColor: alpha(brand[200], 0.7),
              },
              ...theme.applyStyles("dark", {
                color: brand[50],
                border: "1px solid",
                borderColor: brand[900],
                backgroundColor: alpha(brand[900], 0.3),
                "&:hover": {
                  borderColor: brand[700],
                  backgroundColor: alpha(brand[900], 0.6),
                },
                "&:active": {
                  backgroundColor: alpha(brand[900], 0.5),
                },
              }),
            },
          },
          {
            props: {
              color: "error",
              variant: "outlined",
            },
            style: {
              color: red[700],
              border: "1px solid",
              borderColor: red[300],
              backgroundColor: red[50],
              "&:hover": {
                backgroundColor: red[100],
                borderColor: red[400],
              },
              "&:active": {
                backgroundColor: alpha(red[200], 0.7),
              },
              ...theme.applyStyles("dark", {
                color: red[50],
                border: "1px solid",
                borderColor: red[800],
                backgroundColor: alpha(red[900], 0.3),
                "&:hover": {
                  borderColor: red[600],
                  backgroundColor: alpha(red[900], 0.6),
                },
                "&:active": {
                  backgroundColor: alpha(red[900], 0.5),
                },
              }),
            },
          },
          {
            props: {
              color: "warning",
              variant: "outlined",
            },
            style: {
              color: orange[700],
              border: "1px solid",
              borderColor: orange[300],
              backgroundColor: orange[50],
              "&:hover": {
                backgroundColor: orange[100],
                borderColor: orange[400],
              },
              "&:active": {
                backgroundColor: alpha(orange[200], 0.7),
              },
              ...theme.applyStyles("dark", {
                color: orange[50],
                border: "1px solid",
                borderColor: orange[800],
                backgroundColor: alpha(orange[900], 0.3),
                "&:hover": {
                  borderColor: orange[600],
                  backgroundColor: alpha(orange[900], 0.6),
                },
                "&:active": {
                  backgroundColor: alpha(orange[900], 0.5),
                },
              }),
            },
          },
          {
            props: {
              color: "info",
              variant: "outlined",
            },
            style: {
              color: brand[400],
              border: "1px solid",
              borderColor: alpha(brand[300], 0.8),
              backgroundColor: alpha(brand[50], 0.4),
              "&:hover": {
                backgroundColor: alpha(brand[100], 0.6),
                borderColor: brand[400],
                boxShadow: `0 2px 8px ${alpha(brand[200], 0.2)}`,
              },
              "&:active": {
                backgroundColor: alpha(brand[200], 0.3),
              },
              ...theme.applyStyles("dark", {
                color: brand[200],
                borderColor: alpha(brand[700], 0.5),
                backgroundColor: alpha(brand[900], 0.1),
                "&:hover": {
                  borderColor: brand[600],
                  backgroundColor: alpha(brand[900], 0.2),
                  boxShadow: `0 2px 12px ${alpha(brand[800], 0.3)}`,
                },
                "&:active": {
                  backgroundColor: alpha(brand[900], 0.25),
                },
              }),
            },
          },
          {
            props: {
              color: "success",
              variant: "outlined",
            },
            style: {
              color: green[600],
              border: "1px solid",
              borderColor: green[300],
              backgroundColor: green[50],
              "&:hover": {
                backgroundColor: green[100],
                borderColor: green[400],
              },
              "&:active": {
                backgroundColor: alpha(green[200], 0.5),
              },
              ...theme.applyStyles("dark", {
                color: green[200],
                border: "1px solid",
                borderColor: green[800],
                backgroundColor: alpha(green[900], 0.25),
                "&:hover": {
                  borderColor: green[600],
                  backgroundColor: alpha(green[900], 0.4),
                },
                "&:active": {
                  backgroundColor: alpha(green[900], 0.35),
                },
              }),
            },
          },
          {
            props: {
              variant: "text",
            },
            style: {
              color: gray[600],
              "&:hover": {
                backgroundColor: gray[100],
              },
              "&:active": {
                backgroundColor: gray[200],
              },
              ...theme.applyStyles("dark", {
                color: gray[50],
                "&:hover": {
                  backgroundColor: gray[700],
                },
                "&:active": {
                  backgroundColor: alpha(gray[700], 0.7),
                },
              }),
            },
          },
          {
            props: {
              color: "secondary",
              variant: "text",
            },
            style: {
              color: brand[700],
              "&:hover": {
                backgroundColor: alpha(brand[100], 0.5),
              },
              "&:active": {
                backgroundColor: alpha(brand[200], 0.7),
              },
              ...theme.applyStyles("dark", {
                color: brand[100],
                "&:hover": {
                  backgroundColor: alpha(brand[900], 0.5),
                },
                "&:active": {
                  backgroundColor: alpha(brand[900], 0.3),
                },
              }),
            },
          },
          {
            props: {
              color: "error",
              variant: "text",
            },
            style: {
              color: red[700],
              "&:hover": {
                backgroundColor: alpha(red[100], 0.5),
              },
              "&:active": {
                backgroundColor: alpha(red[200], 0.7),
              },
              ...theme.applyStyles("dark", {
                color: red[100],
                "&:hover": {
                  backgroundColor: alpha(red[900], 0.5),
                },
                "&:active": {
                  backgroundColor: alpha(red[900], 0.3),
                },
              }),
            },
          },
          {
            props: {
              color: "warning",
              variant: "text",
            },
            style: {
              color: orange[700],
              "&:hover": {
                backgroundColor: alpha(orange[100], 0.5),
              },
              "&:active": {
                backgroundColor: alpha(orange[200], 0.7),
              },
              ...theme.applyStyles("dark", {
                color: orange[100],
                "&:hover": {
                  backgroundColor: alpha(orange[900], 0.5),
                },
                "&:active": {
                  backgroundColor: alpha(orange[900], 0.3),
                },
              }),
            },
          },
          {
            props: {
              color: "info",
              variant: "text",
            },
            style: {
              color: brand[500],
              "&:hover": {
                backgroundColor: alpha(brand[50], 0.3),
              },
              "&:active": {
                backgroundColor: alpha(brand[100], 0.2),
              },
              ...theme.applyStyles("dark", {
                color: brand[200],
                "&:hover": {
                  backgroundColor: alpha(brand[900], 0.2),
                },
                "&:active": {
                  backgroundColor: alpha(brand[900], 0.1),
                },
              }),
            },
          },
          {
            props: {
              color: "success",
              variant: "text",
            },
            style: {
              color: green[600],
              "&:hover": {
                backgroundColor: alpha(green[100], 0.4),
                boxShadow: `0 2px 0 ${alpha(green[400], 0.3)}`,
              },
              "&:active": {
                backgroundColor: alpha(green[200], 0.6),
                boxShadow: "none",
              },
              ...theme.applyStyles("dark", {
                color: green[100],
                "&:hover": {
                  backgroundColor: alpha(green[900], 0.4),
                  boxShadow: `0 2px 0 ${alpha(green[600], 0.3)}`,
                },
                "&:active": {
                  backgroundColor: alpha(green[900], 0.3),
                },
              }),
            },
          },
        ],
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: "none",
        borderRadius: (theme.vars || theme).shape.borderRadius,
        textTransform: "none",
        fontWeight: theme.typography.fontWeightMedium,
        letterSpacing: 0,
        color: (theme.vars || theme).palette.text.primary,
        border: "1px solid ",
        borderColor: gray[200],
        backgroundColor: alpha(gray[50], 0.3),
        "&:hover": {
          backgroundColor: gray[100],
          borderColor: gray[300],
        },
        "&:active": {
          backgroundColor: gray[200],
        },
        ...theme.applyStyles("dark", {
          backgroundColor: gray[800],
          borderColor: gray[700],
          "&:hover": {
            backgroundColor: gray[900],
            borderColor: gray[600],
          },
          "&:active": {
            backgroundColor: gray[900],
          },
        }),
        variants: [
          {
            props: {
              size: "small",
            },
            style: {
              width: "2.25rem",
              height: "2.25rem",
              padding: "0.25rem",
              [`& .${svgIconClasses.root}`]: { fontSize: "1rem" },
            },
          },
          {
            props: {
              size: "medium",
            },
            style: {
              width: "2.5rem",
              height: "2.5rem",
            },
          },
        ],
      }),
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "10px",
        boxShadow: `0 4px 16px ${alpha(gray[400], 0.2)}`,
        [`& .${toggleButtonGroupClasses.selected}`]: {
          color: brand[500],
        },
        ...theme.applyStyles("dark", {
          [`& .${toggleButtonGroupClasses.selected}`]: {
            color: "#fff",
          },
          boxShadow: `0 4px 16px ${alpha(brand[700], 0.5)}`,
        }),
      }),
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: "12px 16px",
        textTransform: "none",
        borderRadius: "10px",
        fontWeight: 500,
        ...theme.applyStyles("dark", {
          color: gray[400],
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
          [`&.${toggleButtonClasses.selected}`]: {
            color: brand[300],
          },
        }),
      }),
    },
  },
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true,
      icon: (
        <CheckBoxOutlineBlankRoundedIcon
          sx={{ color: "hsla(210, 0%, 0%, 0.0)" }}
        />
      ),
      checkedIcon: <CheckRoundedIcon sx={{ height: 14, width: 14 }} />,
      indeterminateIcon: <RemoveRoundedIcon sx={{ height: 14, width: 14 }} />,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        margin: 10,
        height: 16,
        width: 16,
        borderRadius: 5,
        border: "1px solid ",
        borderColor: alpha(gray[300], 0.8),
        boxShadow: "0 0 0 1.5px hsla(210, 0%, 0%, 0.04) inset",
        backgroundColor: alpha(gray[100], 0.4),
        transition: "border-color, background-color, 120ms ease-in",
        "&:hover": {
          borderColor: brand[300],
        },
        "&.Mui-focusVisible": {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: "2px",
          borderColor: brand[400],
        },
        "&.Mui-checked": {
          color: "white",
          backgroundColor: brand[500],
          borderColor: brand[500],
          boxShadow: `none`,
          "&:hover": {
            backgroundColor: brand[600],
          },
        },
        ...theme.applyStyles("dark", {
          borderColor: alpha(gray[700], 0.8),
          boxShadow: "0 0 0 1.5px hsl(210, 0%, 0%) inset",
          backgroundColor: alpha(gray[900], 0.8),
          "&:hover": {
            borderColor: brand[300],
          },
          "&.Mui-focusVisible": {
            borderColor: brand[400],
            outline: `3px solid ${alpha(brand[500], 0.5)}`,
            outlineOffset: "2px",
          },
        }),
      }),
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        border: "none",
      },
      input: {
        "&::placeholder": {
          opacity: 0.7,
          color: gray[500],
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        padding: 0,
      },
      root: ({ theme }) => ({
        padding: "8px 12px",
        color: (theme.vars || theme).palette.text.primary,
        borderRadius: (theme.vars || theme).shape.borderRadius,
        border: `1px solid ${(theme.vars || theme).palette.divider}`,
        backgroundColor: (theme.vars || theme).palette.background.default,
        transition: "border 120ms ease-in",
        "&:hover": {
          borderColor: gray[400],
        },
        [`&.${outlinedInputClasses.focused}`]: {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          borderColor: brand[400],
        },
        ...theme.applyStyles("dark", {
          "&:hover": {
            borderColor: gray[500],
          },
        }),
        variants: [
          {
            props: {
              size: "small",
            },
            style: {
              height: "2.25rem",
            },
          },
          {
            props: {
              size: "medium",
            },
            style: {
              height: "2.5rem",
            },
          },
        ],
      }),
      notchedOutline: {
        border: "none",
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: (theme.vars || theme).palette.grey[500],
        ...theme.applyStyles("dark", {
          color: (theme.vars || theme).palette.grey[400],
        }),
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        typography: theme.typography.caption,
        marginBottom: 8,
      }),
    },
  },
};
