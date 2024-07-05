import React from 'react';
import {
  Add as AddIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
} from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import {
  CellContext,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

type Column = {
  Header: string | JSX.Element;
  accessor: string | ((row: any) => string | number | JSX.Element);
  id?: string;
  Cell?: (info: CellContext<any, any>) => JSX.Element | null;
  footer?: string;
  filter?: 'text' | 'number';
};

type DataTableProps = {
  data: any[];
  columns: Column[];
  loading: boolean;
  paginated?: boolean;
  paginatedPosition?: 'flex-start' | 'center' | 'flex-end';
  pageSize?: number;
  tableTitle: string;
  onClickButtonAdd: () => void;
};

const columnHelper = createColumnHelper<any>();

export const DataTable: React.FC<DataTableProps> = ({
  data = [],
  columns = [],
  paginated = false,
  paginatedPosition = 'center',
  pageSize = 10,
  tableTitle,
  onClickButtonAdd,
}) => {
  const table = useReactTable({
    data,
    columns: columns.map((column) =>
      columnHelper.accessor(column.accessor, {
        ...column,
        header: () => column.Header,
        id: column.id || column.Header.toString(),
        cell: column.Cell ?? (({ getValue }) => <>{getValue()}</>),
        footer: column.footer?.toString(),
      })
    ),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    initialState: {
      pagination: {
        pageSize: pageSize,
      },
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        borderRadius: '8px',
        width: '100%',
        padding: '10px',
        typography: 'body1', // Apply the global typography
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h4">{tableTitle}</Typography>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          color="success"
          onClick={onClickButtonAdd}
        >
          Nueva usuario
        </Button>
      </Box>
      <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
        <Box component="thead" sx={{ borderBottom: '1px solid gray' }}>
          {table.getHeaderGroups().map((headerGroup) => (
            <Box component="tr" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Box
                  component="th"
                  key={header.id}
                  sx={{ width: '300px', padding: '10px', textAlign: 'left' }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
        <Box component="tbody">
          {table.getRowModel().rows.map((row, index) => (
            <Box
              component="tr"
              key={row.id}
              sx={{
                backgroundColor: index % 2 === 0 ? 'white' : '#faeae2',
                color: 'black',
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <Box component="td" key={cell.id} sx={{ padding: '10px' }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
        <Box component="tfoot">
          {table.getFooterGroups().map((footerGroup) => (
            <Box component="tr" key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <Box component="th" key={header.id} sx={{ padding: '10px' }}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
      {paginated && (
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: paginatedPosition,
            alignItems: 'center',
            marginTop: '10px',
            gap: '10px',
          }}
        >
          <Button
            startIcon={<ArrowLeftIcon />}
            variant="contained"
            color="success"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Typography>
            {table.getState().pagination.pageIndex + 1} /{' '}
            {table.getPageCount().toLocaleString()}
          </Typography>
          <Button
            endIcon={<ArrowRightIcon />}
            variant="contained"
            color="success"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Siguiente
          </Button>
        </Box>
      )}
    </Box>
  );
};
