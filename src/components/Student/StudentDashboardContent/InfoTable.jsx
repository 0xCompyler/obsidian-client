import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";

const columns = [
	{
		id: 'name',
		label: 'Name',
		minWidth: 170
	},
	{
		id: 'description',
		label: 'Description',
		minWidth: 100
	},
	{
		id: 'deadline',
		label: 'Deadline',
		minWidth: 170,
	},
];

function createData(name, description, deadline,) {
	return {
		name,
		description,
		deadline: <span style={{color:"red"}}>{deadline}</span>,
	};
}

const rows = [
	createData('India', 'IN', 1324171354,),
	createData('China', 'CN', 1403500365,),
	createData('Italy', 'IT', 60483973,),
	createData('United States', 'US', 327167434,),
	createData('Canada', 'CA', 37602103,),
	createData('Australia', 'AU', 25475400,),
	createData('Germany', 'DE', 83019200,),
	createData('Ireland', 'IE', 4857000,),
	createData('Mexico', 'MX', 126577691,),
	createData('Japan', 'JP', 126317000,),
	createData('France', 'FR', 67022000,),
	createData('United Kingdom', 'GB', 67545757,),
	createData('Russia', 'RU', 146793744,),
	createData('Nigeria', 'NG', 200962417,),
	createData('Brazil', 'BR', 210147125,),
];

export default function InfoTable() {

	const theme = createMuiTheme({
		typography:{
			"fontFamily": `"DM Sans", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif`,
			"fontSize":20,
		},
		palette: {
			type: 'dark',
			background: {
				default: '#08050d',
				paper: '#08050d',
			},
			divider: '#979DAC',
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Paper style={{width: "100%",paddingRight:"1rem"}}>
			<TableContainer style={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
				<TableHead>
					<TableRow>
					{columns.map((column) => (
						<TableCell
						key={column.id}
						align={column.align}
						style={{ minWidth: column.minWidth }}
						>
						<b>{column.label}</b>
						</TableCell>
					))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows
					.map((row) => {
						return (
						<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
							{columns.map((column) => {
							const value = row[column.id];
							return (
								<TableCell key={column.id} align={column.align}>
								{column.format && typeof value === 'number'
									? column.format(value)
									: value}
								</TableCell>
							);
							})}
						</TableRow>
						);
					})}
				</TableBody>
				</Table>
			</TableContainer>
			</Paper>
		</ThemeProvider>
	);
}
