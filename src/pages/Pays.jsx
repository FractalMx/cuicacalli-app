import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from '@mui/material';

const Pays = () => {
  const [search, setSearch] = useState('');
  const [filterWorkshop, setFilterWorkshop] = useState('');

  // Datos simulados
  const payments = [
    { id: 1, name: 'Juan Pérez', workshop: 'Guitarra', amount: 300 },
    { id: 2, name: 'Ana López', workshop: 'Pintura', amount: 250 },
    { id: 3, name: 'Carlos Martínez', workshop: 'Guitarra', amount: 300 },
  ];

  // Filtrar resultados
  const filteredPays = payments.filter(
    (pay) =>
      pay.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterWorkshop ? pay.workshop === filterWorkshop : true)
  );

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5">💰 Pagos</Typography>
        <Button variant="contained" color="primary">
          + Registrar pago
        </Button>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={3}>
        <TextField
          label="Buscar por nombre"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Taller</InputLabel>
          <Select
            value={filterWorkshop}
            label="Taller"
            onChange={(e) => setFilterWorkshop(e.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Guitarra">Guitarra</MenuItem>
            <MenuItem value="Pintura">Pintura</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Taller</TableCell>
              <TableCell>Monto</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPays.map((pay) => (
              <TableRow key={pay.id}>
                <TableCell>{pay.name}</TableCell>
                <TableCell>{pay.workshop}</TableCell>
                <TableCell>${pay.amount}</TableCell>
                <TableCell align="right">
                  <Button size="small" variant="outlined" sx={{ mr: 1 }}>
                    Editar
                  </Button>
                  <Button size="small" variant="outlined" color="error">
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {filteredPays.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No se encontraron registros de pago.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Pays;

