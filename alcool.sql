-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: alcool
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bieres`
--

DROP TABLE IF EXISTS `bieres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bieres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `brasserie` varchar(255) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `degre_alcool` decimal(4,1) DEFAULT NULL,
  `pays_origine` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bieres`
--

LOCK TABLES `bieres` WRITE;
/*!40000 ALTER TABLE `bieres` DISABLE KEYS */;
INSERT INTO `bieres` VALUES (1,'Guinness Draught','Guinness','Stout',4.2,'Irlande','Une bière noire irlandaise avec un goût de malt torréfié et une texture crémeuse.'),(2,'Chimay Bleue','Abbaye de Scourmont','Belgian Strong Dark Ale',9.0,'Belgique','Une bière trappiste belge avec des notes de fruits mûrs, de caramel et d\'épices.'),(3,'Weihenstephaner Hefeweissbier','Bayerische Staatsbrauerei Weihenstephan','Hefeweizen',5.4,'Allemagne','Une bière de blé allemande avec des arômes de banane, de clou de girofle et une texture douce.'),(4,'Sierra Nevada Pale Ale','Sierra Nevada Brewing Co.','Pale Ale',5.6,'États-Unis','Une pale ale américaine avec des saveurs d\'agrumes, de pin et une amertume modérée.'),(5,'Orval','Brasserie d\'Orval','Belgian Pale Ale',6.2,'Belgique','Une bière trappiste belge avec des notes d\'herbes, d\'épices, de fruité et une légère acidité.');
/*!40000 ALTER TABLE `bieres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spirits`
--

DROP TABLE IF EXISTS `spirits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `spirits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `marque` varchar(255) DEFAULT NULL,
  `degre_alcool` int(11) DEFAULT NULL,
  `pays_origine` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spirits`
--

LOCK TABLES `spirits` WRITE;
/*!40000 ALTER TABLE `spirits` DISABLE KEYS */;
INSERT INTO `spirits` VALUES (1,'Glenfiddich 12 ans','Whisky','Glenfiddich',40,'Écosse','Un whisky écossais vieilli pendant 12 ans en fûts de chêne, offrant des notes de poire, de vanille et de chêne.'),(2,'Bombay Sapphire','Gin','Bombay Sapphire',40,'Royaume-Uni','Un gin londonien de renommée mondiale, distillé avec dix ingrédients botaniques, offrant un goût frais et équilibré avec des notes de genièvre et d\'agrumes.'),(3,'Hennessy VSOP Privilege','Cognac','Hennessy',40,'France','Un cognac de qualité supérieure, vieilli pendant au moins quatre ans, offrant des arômes riches de fruits secs, de vanille et d\'épices.'),(4,'Patron Silver','Tequila','Patron',40,'Mexique','Une tequila premium élaborée à partir d\'agaves bleus, offrant un goût frais et net avec des notes d\'agrumes et une finition douce.'),(5,'Grey Goose','Vodka','Grey Goose',40,'France','Une vodka française de qualité supérieure, distillée à partir de blé tendre de Picardie, offrant une texture soyeuse et des notes douces de vanille et d\'agrumes.');
/*!40000 ALTER TABLE `spirits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vins`
--

DROP TABLE IF EXISTS `vins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `domaine` varchar(255) DEFAULT NULL,
  `cepage` varchar(255) DEFAULT NULL,
  `couleur` varchar(50) DEFAULT NULL,
  `region` varchar(100) DEFAULT NULL,
  `annee` int(11) DEFAULT NULL,
  `degre_alcool` decimal(4,1) DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vins`
--

LOCK TABLES `vins` WRITE;
/*!40000 ALTER TABLE `vins` DISABLE KEYS */;
INSERT INTO `vins` VALUES (1,'Chardonnay Sonoma Coast','Kistler Vineyards','Chardonnay','blanc','Sonoma Coast',2019,14.0,'Un Chardonnay de la côte de Sonoma offrant des arômes de fruits tropicaux, de vanille et de noisette, avec une texture crémeuse et une acidité rafraîchissante.'),(2,'Whispering Angel','Château d\'Esclans','Grenache, Cinsault, Rolle, Syrah, Tibouren','rosé','Provence',2020,13.5,'Un rosé élégant de Provence, avec des notes de fruits rouges frais, une minéralité subtile et une finale délicatement épicée.'),(3,'Domaine de la Côte Pinot Noir Bloom\'s Field','Domaine de la Côte','Pinot Noir','rouge','Santa Rita Hills',2018,13.0,'Un Pinot Noir de Santa Rita Hills offrant des arômes de cerise noire, de terre humide et de fleurs sauvages, avec une acidité vive et des tanins souples.'),(4,'Sancerre Blanc','Domaine Vacheron','Sauvignon Blanc','blanc','Loire Valley',2020,13.0,'Un Sauvignon Blanc de Sancerre avec des arômes d\'agrumes, de fleurs blanches et une minéralité crayeuse distinctive.'),(5,'Barolo','Marchesi di Barolo','Nebbiolo','rouge','Piemonte',2015,14.5,'Un vin emblématique du Piémont, le Barolo offre des arômes de roses, de cerises, de truffes et d\'épices, avec une structure tannique robuste et une longue finale.');
/*!40000 ALTER TABLE `vins` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-08 16:34:43
