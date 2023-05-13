-- MySQL dump 10.13  Distrib 8.0.30, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: timeline
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card` (
  `id` int NOT NULL AUTO_INCREMENT,
  `professor_id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `date` int NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL COMMENT '\n',
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_card_professor1_idx` (`professor_id`),
  CONSTRAINT `fk_card_professor1` FOREIGN KEY (`professor_id`) REFERENCES `professor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (2,1,'teste',1554,'teste','teste',NULL),(3,1,'oidasda',1600,'uasdhdasu','ddhasudas',NULL),(4,1,'Independencia do Brasil',1822,'Data da independencia do Brasil','https://static.todamateria.com.br/upload/in/de/independencia-do-brasil-og.jpg',NULL),(5,1,'Republica do Brasil',1896,'Independencia do Brasil','https://static.todamateria.com.br/upload/in/de/independencia-do-brasil-og.jpg',NULL),(6,1,'Governo Militar',1964,'Inicio do regime militar no brasil','https://static.todamateria.com.br/upload/in/de/independencia-do-brasil-og.jpg',NULL),(7,1,'Democracia',1988,'Volta da democracia no brasil','https://static.todamateria.com.br/upload/in/de/independencia-do-brasil-og.jpg',NULL),(8,1,'Plano Real',1994,'Criação do plano real','https://static.todamateria.com.br/upload/in/de/independencia-do-brasil-og.jpg',NULL),(9,1,'Era Vargas',1934,'Inicio da era vargas','https://static.todamateria.com.br/upload/in/de/independencia-do-brasil-og.jpg',NULL),(10,1,'Descobrimento do Brasil',1560,'Chegada da expedição portuguesa ao Brasil','https://static.todamateria.com.br/upload/in/de/independencia-do-brasil-og.jpg',NULL),(11,1,'Chegada da Familia Real',1804,'Chegada da familia real no brasil','https://static.todamateria.com.br/upload/in/de/independencia-do-brasil-og.jpg',NULL),(12,1,'Abolição da escravidão',1890,'Fim da escravidão no país','https://static.todamateria.com.br/upload/in/de/independencia-do-brasil-og.jpg',NULL),(13,1,'Testeasddsasd',2021,'dasadsoasduh','dasuashdudsh',NULL),(14,1,'OI',1292,'asdas','iiasdkasda',NULL);
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-13 11:14:29
