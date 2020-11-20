-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-11-2020 a las 20:05:47
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogo`
--

CREATE TABLE `catalogo` (
  `id_catalogo` int(100) NOT NULL,
  `nombre_catalogo` varchar(100) NOT NULL,
  `precio_catalogo` float NOT NULL,
  `imagen_catalogo` varchar(255) NOT NULL,
  `descripcion_catalogo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `catalogo`
--

INSERT INTO `catalogo` (`id_catalogo`, `nombre_catalogo`, `precio_catalogo`, `imagen_catalogo`, `descripcion_catalogo`) VALUES
(1, 'pechera', 10, 'imagen', 'Pechera para perro de 37g'),
(3, 'Comedero', 5, 'otra cosa', 'Comedero para perro'),
(4, 'pelota', 5, 'pelota redonda', 'redonda'),
(8, 'Collar', 1.5, 'imagen', 'verde');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE `cita` (
  `id_cita` int(100) NOT NULL,
  `fecha_cita` date NOT NULL,
  `hora_cita` time NOT NULL,
  `descripcion_cita` varchar(255) NOT NULL,
  `id_cliente` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cita`
--

INSERT INTO `cita` (`id_cita`, `fecha_cita`, `hora_cita`, `descripcion_cita`, `id_cliente`) VALUES
(1, '2020-10-24', '08:40:10', 'Urgente', 23),
(2, '2020-10-24', '08:40:10', 'Pendiente', 23),
(7, '2020-11-02', '21:35:00', 'boo', 23),
(10, '2020-11-01', '21:35:00', 'urgente', 23),
(12, '2020-11-21', '17:57:00', 'pendiente', 1),
(13, '2020-11-18', '20:58:00', 'urgente', 1),
(14, '2020-11-20', '22:02:00', 'rojo', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente_mascota`
--

CREATE TABLE `cliente_mascota` (
  `id_cliente_mascota` int(100) NOT NULL,
  `id_mascota` int(100) NOT NULL,
  `id_cliente` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `expediente`
--

CREATE TABLE `expediente` (
  `id_expediente` int(100) NOT NULL,
  `id_cita` int(100) NOT NULL,
  `descripcion_expediente` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `expediente`
--

INSERT INTO `expediente` (`id_expediente`, `id_cita`, `descripcion_expediente`) VALUES
(11, 1, 'expediente nuevo'),
(14, 1, 'expediente nuevo4'),
(15, 7, 'falta'),
(17, 1, 'Blacky');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascota`
--

CREATE TABLE `mascota` (
  `id_mascota` int(100) NOT NULL,
  `nombre_mascota` varchar(255) NOT NULL,
  `edad_mascota` int(4) NOT NULL,
  `raza_mascota` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mascota`
--

INSERT INTO `mascota` (`id_mascota`, `nombre_mascota`, `edad_mascota`, `raza_mascota`) VALUES
(1, 'Rocky', 5, 'lo que sea'),
(22, 'Luki', 2, 'Angora'),
(23, 'Blacky', 1, 'Carey'),
(24, 'Rex', 8, 'Pastor aleman1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `id_tipo_usuario` int(100) NOT NULL,
  `nombre_tipo_usuario` varchar(100) NOT NULL,
  `descripcion_tipo_usuario` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`id_tipo_usuario`, `nombre_tipo_usuario`, `descripcion_tipo_usuario`) VALUES
(0, 'Administrador', ''),
(1, 'Veterinario', ''),
(2, 'Cliente', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(100) NOT NULL,
  `nombre_usuario` varchar(100) NOT NULL,
  `apellido_usuario` varchar(100) DEFAULT NULL,
  `correo_usuario` varchar(100) NOT NULL,
  `password_usuario` varchar(100) DEFAULT NULL,
  `tipo_usuario` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre_usuario`, `apellido_usuario`, `correo_usuario`, `password_usuario`, `tipo_usuario`) VALUES
(8, 'Patricia Guadalupe', 'Quintanilla', 'lupe_624@hotmail.com', '23rwef', 1),
(11, 'José', 'Bonilla', 'jose@hotmail.com', '123', 0),
(12, 'Reynaldo', 'Mendoza', 'Reynaldo@hotmail.com', '123', 0),
(13, 'Alberto', 'Martínez', 'Alberto@hotmail.com', '123', 0),
(16, 'dany', 'mejilla', 'dany@hotmail.com', '123456789', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `catalogo`
--
ALTER TABLE `catalogo`
  ADD PRIMARY KEY (`id_catalogo`);

--
-- Indices de la tabla `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`id_cita`),
  ADD KEY `id_cliente` (`id_cliente`);

--
-- Indices de la tabla `cliente_mascota`
--
ALTER TABLE `cliente_mascota`
  ADD PRIMARY KEY (`id_cliente_mascota`),
  ADD KEY `id_mascota` (`id_mascota`),
  ADD KEY `id_cliente` (`id_cliente`);

--
-- Indices de la tabla `expediente`
--
ALTER TABLE `expediente`
  ADD PRIMARY KEY (`id_expediente`),
  ADD KEY `id_cita` (`id_cita`);

--
-- Indices de la tabla `mascota`
--
ALTER TABLE `mascota`
  ADD PRIMARY KEY (`id_mascota`);

--
-- Indices de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`id_tipo_usuario`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `tipo_usuario` (`tipo_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `catalogo`
--
ALTER TABLE `catalogo`
  MODIFY `id_catalogo` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `cita`
--
ALTER TABLE `cita`
  MODIFY `id_cita` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `cliente_mascota`
--
ALTER TABLE `cliente_mascota`
  MODIFY `id_cliente_mascota` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `expediente`
--
ALTER TABLE `expediente`
  MODIFY `id_expediente` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `mascota`
--
ALTER TABLE `mascota`
  MODIFY `id_mascota` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `id_tipo_usuario` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cita`
--
ALTER TABLE `cita`
  ADD CONSTRAINT `cita_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `mascota` (`id_mascota`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `cliente_mascota`
--
ALTER TABLE `cliente_mascota`
  ADD CONSTRAINT `cliente_mascota_ibfk_1` FOREIGN KEY (`id_mascota`) REFERENCES `mascota` (`id_mascota`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cliente_mascota_ibfk_2` FOREIGN KEY (`id_cliente`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `expediente`
--
ALTER TABLE `expediente`
  ADD CONSTRAINT `expediente_ibfk_1` FOREIGN KEY (`id_cita`) REFERENCES `cita` (`id_cita`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`tipo_usuario`) REFERENCES `tipo_usuario` (`id_tipo_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
