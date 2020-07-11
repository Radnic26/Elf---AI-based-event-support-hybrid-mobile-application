-- MySQL dump 10.13  Distrib 8.0.20, for Linux (x86_64)
--
-- Host: localhost    Database: nextlab_refactor
-- ------------------------------------------------------
-- Server version	8.0.20-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'components','2020-05-15 07:41:32','2020-05-15 07:41:32'),(2,'da','2020-05-21 18:27:53','2020-05-21 18:27:53'),(3,'','2020-05-31 12:04:01','2020-05-31 12:04:01'),(4,'dadad','2020-05-31 12:47:53','2020-05-31 12:47:53');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `examples`
--

DROP TABLE IF EXISTS `examples`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examples` (
  `id` int NOT NULL AUTO_INCREMENT,
  `example` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `subcategoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `subcategoryId` (`subcategoryId`),
  CONSTRAINT `examples_ibfk_1` FOREIGN KEY (`subcategoryId`) REFERENCES `subcategories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examples`
--

LOCK TABLES `examples` WRITE;
/*!40000 ALTER TABLE `examples` DISABLE KEYS */;
/*!40000 ALTER TABLE `examples` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `context` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=220 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'hey','greeting','2020-05-06 20:58:37','2020-05-06 20:58:37',1),(2,'feafe','test','2020-05-06 21:03:28','2020-05-06 21:03:28',1),(3,'fae','test','2020-05-06 21:08:37','2020-05-06 21:08:37',1),(4,'fvewsvc','test','2020-05-06 21:08:41','2020-05-06 21:08:41',1),(5,'faef','test','2020-05-06 21:09:07','2020-05-06 21:09:07',1),(6,'faefe','test','2020-05-06 21:09:34','2020-05-06 21:09:34',1),(7,'faefe','test','2020-05-06 21:09:38','2020-05-06 21:09:38',1),(8,'fafeac','test','2020-05-06 21:09:44','2020-05-06 21:09:44',1),(9,'efafce','test','2020-05-06 21:10:11','2020-05-06 21:10:11',1),(10,'efaesf','test','2020-05-06 21:10:24','2020-05-06 21:10:24',1),(11,'acaece','test','2020-05-06 21:10:45','2020-05-06 21:10:45',1),(12,'afce','test','2020-05-06 21:11:11','2020-05-06 21:11:11',1),(13,'aefaefce','test','2020-05-06 21:11:35','2020-05-06 21:11:35',1),(14,'easce','test','2020-05-06 21:11:55','2020-05-06 21:11:55',1),(15,'easce','test','2020-05-06 21:11:59','2020-05-06 21:11:59',1),(16,'aefe','test','2020-05-06 21:12:00','2020-05-06 21:12:00',1),(17,'faef','test','2020-05-06 21:12:24','2020-05-06 21:12:24',1),(18,'dada','test','2020-05-06 21:33:21','2020-05-06 21:33:21',1),(19,'aef','test','2020-05-06 21:34:04','2020-05-06 21:34:04',1),(20,'feafef','test','2020-05-06 21:35:01','2020-05-06 21:35:01',1),(21,'feafef','test','2020-05-06 21:35:02','2020-05-06 21:35:02',1),(22,'feafef','test','2020-05-06 21:35:02','2020-05-06 21:35:02',1),(23,'feafef','test','2020-05-06 21:35:03','2020-05-06 21:35:03',1),(24,'feafef','test','2020-05-06 21:35:03','2020-05-06 21:35:03',1),(25,'feafef','test','2020-05-06 21:35:05','2020-05-06 21:35:05',1),(26,'feafef','test','2020-05-06 21:35:06','2020-05-06 21:35:06',1),(27,'feafef','test','2020-05-06 21:35:06','2020-05-06 21:35:06',1),(28,'feafef','test','2020-05-06 21:35:08','2020-05-06 21:35:08',1),(29,'faefe','test','2020-05-06 21:35:30','2020-05-06 21:35:30',1),(30,'','test','2020-05-06 21:37:56','2020-05-06 21:37:56',1),(31,'','test','2020-05-06 21:37:56','2020-05-06 21:37:56',1),(32,'','test','2020-05-06 21:38:28','2020-05-06 21:38:28',1),(33,'','test','2020-05-06 21:38:29','2020-05-06 21:38:29',1),(34,'','test','2020-05-06 21:38:30','2020-05-06 21:38:30',1),(35,'','test','2020-05-06 21:38:54','2020-05-06 21:38:54',1),(36,'','test','2020-05-06 21:38:57','2020-05-06 21:38:57',1),(37,'caec','test','2020-05-06 21:39:28','2020-05-06 21:39:28',1),(38,'caec','test','2020-05-06 21:39:37','2020-05-06 21:39:37',1),(39,'caec','test','2020-05-06 21:39:38','2020-05-06 21:39:38',1),(40,'caec','test','2020-05-06 21:39:39','2020-05-06 21:39:39',1),(41,'zi-mi un banc','test','2020-05-06 21:39:46','2020-05-06 21:39:46',1),(42,'bacn','test','2020-05-06 21:39:57','2020-05-06 21:39:57',1),(43,'zi-mi un banc','test','2020-05-06 21:40:03','2020-05-06 21:40:03',1),(44,'zi-mi un banc','test','2020-05-06 21:40:07','2020-05-06 21:40:07',1),(45,'','test','2020-05-06 21:40:10','2020-05-06 21:40:10',1),(46,'','test','2020-05-06 21:40:12','2020-05-06 21:40:12',1),(47,'','test','2020-05-06 21:40:14','2020-05-06 21:40:14',1),(48,'','test','2020-05-06 21:40:15','2020-05-06 21:40:15',1),(49,'banc','test','2020-05-06 21:40:44','2020-05-06 21:40:44',1),(50,'de','test','2020-05-06 21:40:47','2020-05-06 21:40:47',1),(51,'zi-mi un banc','test','2020-05-06 21:41:08','2020-05-06 21:41:08',1),(52,'roate invers','test','2020-05-06 21:41:14','2020-05-06 21:41:14',1),(53,'roate invers','test','2020-05-06 21:41:17','2020-05-06 21:41:17',1),(54,'da','test','2020-05-06 21:42:47','2020-05-06 21:42:47',1),(55,'banc','test','2020-05-06 21:43:26','2020-05-06 21:43:26',1),(56,'banc','test','2020-05-06 21:43:29','2020-05-06 21:43:29',1),(57,'roata invmer','test','2020-05-06 21:43:35','2020-05-06 21:43:35',1),(58,'roata invmer','test','2020-05-06 21:43:38','2020-05-06 21:43:38',1),(59,'geasge','test','2020-05-06 21:43:46','2020-05-06 21:43:46',1),(60,'','test','2020-05-06 21:44:16','2020-05-06 21:44:16',1),(61,'afaef','test','2020-05-06 21:44:18','2020-05-06 21:44:18',1),(62,'banc','test','2020-05-06 21:44:22','2020-05-06 21:44:22',1),(63,'roata invers','test','2020-05-06 21:44:28','2020-05-06 21:44:28',1),(64,'banc','test','2020-05-06 21:44:35','2020-05-06 21:44:35',1),(65,'banc','test','2020-05-06 21:44:38','2020-05-06 21:44:38',1),(66,'edafe','test','2020-05-06 21:45:33','2020-05-06 21:45:33',1),(67,'banc','test','2020-05-06 21:45:36','2020-05-06 21:45:36',1),(68,'roata invers','test','2020-05-06 21:45:42','2020-05-06 21:45:42',1),(69,'banc','test','2020-05-06 21:45:47','2020-05-06 21:45:47',1),(70,'feaf','test','2020-05-06 21:45:49','2020-05-06 21:45:49',1),(71,'nu urmareste linia','test','2020-05-06 21:45:55','2020-05-06 21:45:55',1),(72,'banc','test','2020-05-06 21:46:00','2020-05-06 21:46:00',1),(73,'mancam la kfc?','test','2020-05-06 21:46:07','2020-05-06 21:46:07',1),(74,'banc','test','2020-05-06 21:54:38','2020-05-06 21:54:38',1),(75,'bejne','test','2020-05-06 22:11:08','2020-05-06 22:11:08',1),(76,'zi-mi un banc','test','2020-05-06 22:11:17','2020-05-06 22:11:17',1),(77,'kfc','test','2020-05-15 07:38:56','2020-05-15 07:38:56',1),(78,'vdhd','test','2020-05-15 07:41:18','2020-05-15 07:41:18',1),(79,'mancam la kfc?','test','2020-05-15 07:42:03','2020-05-15 07:42:03',1),(80,'mancam la kfc?','test','2020-05-15 08:29:21','2020-05-15 08:29:21',1),(81,'mancam la kfc?','test','2020-05-15 08:32:17','2020-05-15 08:32:17',1),(82,'roata invers','test','2020-05-15 12:46:09','2020-05-15 12:46:09',1),(83,'da','test','2020-05-16 14:31:01','2020-05-16 14:31:01',1),(84,'dada','test','2020-05-16 14:34:06','2020-05-16 14:34:06',1),(85,'ttgy','test','2020-05-16 14:37:12','2020-05-16 14:37:12',1),(86,'roata invers','test','2020-05-16 14:37:25','2020-05-16 14:37:25',1),(87,'zi un banc','test','2020-05-16 14:37:36','2020-05-16 14:37:36',1),(88,'zi-mi un banc','test','2020-05-19 16:11:25','2020-05-19 16:11:25',1),(89,'o roata se invarte invers','test','2020-05-19 16:11:50','2020-05-19 16:11:50',1),(90,'ggui','test','2020-05-19 16:21:00','2020-05-19 16:21:00',1),(91,'ggui','test','2020-05-19 16:21:04','2020-05-19 16:21:04',1),(92,'kfc','test','2020-05-21 18:17:27','2020-05-21 18:17:27',3),(93,'zi-mi un banc','test','2020-05-21 18:17:41','2020-05-21 18:17:41',3),(94,'spune-mi o gluma','test','2020-05-21 18:30:20','2020-05-21 18:30:20',4),(95,'ndkdk','test','2020-05-21 18:36:01','2020-05-21 18:36:01',3),(96,'zi un banc','test','2020-05-21 18:36:22','2020-05-21 18:36:22',3),(97,'Mancam la KFC?','test','2020-05-21 19:09:13','2020-05-21 19:09:13',5),(98,'Bem','test','2020-05-21 19:10:32','2020-05-21 19:10:32',5),(99,'Cum merge','test','2020-05-21 19:10:54','2020-05-21 19:10:54',5),(100,'Mâncăm la KFC?','test','2020-05-23 09:48:49','2020-05-23 09:48:49',6),(101,'Mâncăm la KFC?','test','2020-05-23 09:49:58','2020-05-23 09:49:58',6),(102,'Yduf','test','2020-05-23 09:50:33','2020-05-23 09:50:33',6),(103,'Zi-mi un banc','test','2020-05-23 09:50:49','2020-05-23 09:50:49',6),(104,'Mâncăm la KFC?','test','2020-05-23 09:51:11','2020-05-23 09:51:11',6),(105,'Mâncăm la kfc?','test','2020-05-23 09:51:22','2020-05-23 09:51:22',6),(106,'Kfc','test','2020-05-23 09:51:30','2020-05-23 09:51:30',6),(107,'Mancam la kfc?','test','2020-05-23 09:51:48','2020-05-23 09:51:48',6),(108,'Roata se invarte  invers','test','2020-05-23 09:54:59','2020-05-23 09:54:59',6),(109,'mancam la kfc?','test','2020-05-25 18:18:45','2020-05-25 18:18:45',7),(110,'zi-mi un banc','test','2020-05-25 18:18:55','2020-05-25 18:18:55',7),(111,'faef','test','2020-05-30 21:43:18','2020-05-30 21:43:18',1),(112,'gegwsergewrgweg','test','2020-05-30 21:44:08','2020-05-30 21:44:08',1),(113,'faef','test','2020-05-30 22:33:53','2020-05-30 22:33:53',1),(114,'fawf','test','2020-05-30 22:34:40','2020-05-30 22:34:40',1),(115,'fasf','test','2020-05-30 22:36:35','2020-05-30 22:36:35',1),(116,'faef','test','2020-05-30 22:36:51','2020-05-30 22:36:51',1),(117,'fea','test','2020-05-30 22:36:53','2020-05-30 22:36:53',1),(118,'fea','test','2020-05-30 22:36:54','2020-05-30 22:36:54',1),(119,'fawf','test','2020-05-30 22:38:24','2020-05-30 22:38:24',1),(120,'fef','test','2020-05-30 22:38:25','2020-05-30 22:38:25',1),(121,'dw','test','2020-05-30 22:39:19','2020-05-30 22:39:19',1),(122,'zi-mi un banc','test','2020-05-30 22:42:55','2020-05-30 22:42:55',1),(123,'zi-mi un banc','test','2020-05-30 22:43:12','2020-05-30 22:43:12',1),(124,'roata se invarte invers','test','2020-05-30 22:43:25','2020-05-30 22:43:25',1),(125,'putem comanda de la kfc?','test','2020-05-30 22:43:30','2020-05-30 22:43:30',1),(126,'da','test','2020-05-30 22:43:59','2020-05-30 22:43:59',1),(127,'banc','test','2020-05-30 22:46:18','2020-05-30 22:46:18',1),(128,'rfeagfeg','test','2020-05-30 22:46:26','2020-05-30 22:46:26',1),(129,'feaf','test','2020-05-30 22:47:46','2020-05-30 22:47:46',1),(130,'aefea','test','2020-05-30 22:47:51','2020-05-30 22:47:51',1),(131,'zi-mi un banc','test','2020-05-30 22:47:57','2020-05-30 22:47:57',1),(132,'putem comanda de la kfc?','test','2020-05-30 22:48:04','2020-05-30 22:48:04',1),(133,'ce faci?','test','2020-05-30 22:48:26','2020-05-30 22:48:26',1),(134,'da','test','2020-05-30 22:50:27','2020-05-30 22:50:27',1),(135,'fef','test','2020-05-30 22:50:33','2020-05-30 22:50:33',1),(136,'feaf','test','2020-05-30 22:50:36','2020-05-30 22:50:36',1),(137,'faef','test','2020-05-30 22:50:38','2020-05-30 22:50:38',1),(138,'da','test','2020-05-30 22:51:16','2020-05-30 22:51:16',1),(139,'da','test','2020-05-30 22:51:18','2020-05-30 22:51:18',1),(140,'da','test','2020-05-30 22:51:19','2020-05-30 22:51:19',1),(141,'faef','test','2020-05-30 22:54:05','2020-05-30 22:54:05',1),(142,'da','test','2020-05-30 22:59:23','2020-05-30 22:59:23',1),(143,'da','test','2020-05-30 22:59:24','2020-05-30 22:59:24',1),(144,'da','test','2020-05-30 22:59:26','2020-05-30 22:59:26',1),(145,'da','test','2020-05-30 22:59:27','2020-05-30 22:59:27',1),(146,'da','test','2020-05-30 23:01:15','2020-05-30 23:01:15',1),(147,'faef','test','2020-05-30 23:01:32','2020-05-30 23:01:32',1),(148,'faef','test','2020-05-30 23:01:47','2020-05-30 23:01:47',1),(149,'dae','test','2020-05-30 23:01:49','2020-05-30 23:01:49',1),(150,'mancam la kfc?','test','2020-05-30 23:01:55','2020-05-30 23:01:55',1),(151,'roata se invarte invers','test','2020-05-30 23:02:00','2020-05-30 23:02:00',1),(152,'zi-mi un banc','test','2020-05-30 23:03:17','2020-05-30 23:03:17',1),(153,'o muie','test','2020-05-30 23:18:48','2020-05-30 23:18:48',3),(154,'zi-mi un banc','test','2020-05-30 23:18:54','2020-05-30 23:18:54',3),(155,'ce faci?','test','2020-05-30 23:19:13','2020-05-30 23:19:13',3),(156,'cu un banc','test','2020-05-30 23:19:43','2020-05-30 23:19:43',3),(157,'de ce?','test','2020-05-30 23:20:16','2020-05-30 23:20:16',3),(158,'robotul merge aiurea','test','2020-05-30 23:21:48','2020-05-30 23:21:48',3),(159,'roata merge aiurea','test','2020-05-30 23:21:54','2020-05-30 23:21:54',3),(160,'nu se invarte','test','2020-05-30 23:22:09','2020-05-30 23:22:09',3),(161,'roata nu se invarte','test','2020-05-30 23:22:15','2020-05-30 23:22:15',3),(162,'bdbd','test','2020-05-30 23:27:59','2020-05-30 23:27:59',3),(163,'hdhd','test','2020-05-30 23:28:04','2020-05-30 23:28:04',3),(164,'da ma','test','2020-05-30 23:28:11','2020-05-30 23:28:11',3),(165,'banc','test','2020-05-30 23:28:19','2020-05-30 23:28:19',3),(166,'zi-mi un banc','test','2020-05-31 08:42:06','2020-05-31 08:42:06',3),(167,'o roata merge invers','test','2020-05-31 08:42:17','2020-05-31 08:42:17',3),(168,'hdhd','test','2020-05-31 08:46:30','2020-05-31 08:46:30',3),(169,'hdhd','test','2020-05-31 08:47:10','2020-05-31 08:47:10',3),(170,'zi-mi un banc','test','2020-05-31 08:48:14','2020-05-31 08:48:14',3),(171,'da','test','2020-05-31 08:48:18','2020-05-31 08:48:18',3),(172,'da boas','test','2020-05-31 08:49:09','2020-05-31 08:49:09',3),(173,'da boss','test','2020-05-31 08:49:50','2020-05-31 08:49:50',3),(174,'plm','test','2020-05-31 08:50:06','2020-05-31 08:50:06',3),(175,'bdbd','test','2020-05-31 08:51:04','2020-05-31 08:51:04',3),(176,'o roata se invarte invers','test','2020-05-31 08:51:27','2020-05-31 08:51:27',3),(177,'o roata se misca invers','test','2020-05-31 08:58:56','2020-05-31 08:58:56',3),(178,'o pula','test','2020-05-31 08:59:46','2020-05-31 08:59:46',3),(179,'ce faci?','test','2020-05-31 09:01:10','2020-05-31 09:01:10',3),(180,'o roata se invarte invers','test','2020-05-31 09:01:18','2020-05-31 09:01:18',3),(181,'hdhd','test','2020-05-31 09:01:24','2020-05-31 09:01:24',3),(182,'bdbd','test','2020-05-31 09:01:25','2020-05-31 09:01:25',3),(183,'banc','test','2020-05-31 09:01:28','2020-05-31 09:01:28',3),(184,'banc','test','2020-05-31 09:01:47','2020-05-31 09:01:47',3),(185,'banc','test','2020-05-31 09:01:49','2020-05-31 09:01:49',3),(186,'banc','test','2020-05-31 09:01:52','2020-05-31 09:01:52',3),(187,'banc','test','2020-05-31 09:01:54','2020-05-31 09:01:54',3),(188,'O roata se invarte invers ','test','2020-05-31 09:03:28','2020-05-31 09:03:28',9),(189,'Zi.mi un banc ','test','2020-05-31 09:03:42','2020-05-31 09:03:42',9),(190,'Zi.mi un banc ','test','2020-05-31 09:05:14','2020-05-31 09:05:14',9),(191,'zi un banf','test','2020-05-31 09:05:35','2020-05-31 09:05:35',3),(192,'banc','test','2020-05-31 09:05:38','2020-05-31 09:05:38',3),(193,'ffg','test','2020-05-31 09:08:28','2020-05-31 09:08:28',3),(194,'roata se invarte','test','2020-05-31 09:47:35','2020-05-31 09:47:35',10),(195,'mancam la kfc?','test','2020-05-31 10:20:04','2020-05-31 10:20:04',3),(196,'zi-mi un banc','test','2020-05-31 10:20:11','2020-05-31 10:20:11',3),(197,'roata de la robotel merge invers','test','2020-05-31 10:20:27','2020-05-31 10:20:27',3),(198,'gehd','test','2020-05-31 10:20:31','2020-05-31 10:20:31',3),(199,'mancam la kfc?','test','2020-05-31 10:23:30','2020-05-31 10:23:30',3),(200,'zi un banc','test','2020-05-31 10:24:50','2020-05-31 10:24:50',3),(201,'ygh','test','2020-05-31 10:52:11','2020-05-31 10:52:11',3),(202,'mancam la kfc!','test','2020-05-31 11:04:08','2020-05-31 11:04:08',3),(203,'zi un banf','test','2020-05-31 11:04:14','2020-05-31 11:04:14',3),(204,'banc in pula mea','test','2020-05-31 11:04:24','2020-05-31 11:04:24',3),(205,'zi un banc','test','2020-05-31 11:04:33','2020-05-31 11:04:33',3),(206,'hai merci','test','2020-05-31 11:04:42','2020-05-31 11:04:42',3),(207,'mi e foame','test','2020-05-31 12:02:14','2020-05-31 12:02:14',11),(208,'mi-e foame','test','2020-05-31 12:02:19','2020-05-31 12:02:19',3),(209,'mancam la kfc?','test','2020-05-31 12:02:25','2020-05-31 12:02:25',3),(210,'roata merge invers','test','2020-05-31 12:02:31','2020-05-31 12:02:31',3),(211,'roata merge aiurea','test','2020-05-31 12:02:37','2020-05-31 12:02:37',11),(212,'roata merge aiurea','test','2020-05-31 12:02:39','2020-05-31 12:02:39',3),(213,'mancam la kfc?','test','2020-05-31 12:03:00','2020-05-31 12:03:00',3),(214,'mancam la kfc?','test','2020-05-31 12:03:03','2020-05-31 12:03:03',11),(215,'banc','test','2020-05-31 12:03:13','2020-05-31 12:03:13',3),(216,'banc','test','2020-05-31 12:03:19','2020-05-31 12:03:19',11),(217,'hahaha','test','2020-05-31 12:03:33','2020-05-31 12:03:33',11),(218,'hghg','test','2020-05-31 12:04:56','2020-05-31 12:04:56',3),(219,'faef','test','2020-05-31 12:47:47','2020-05-31 12:47:47',3);
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subcategory` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `subcategories_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `photoURL` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Radu Niculae','radu','$2a$10$TEwpfoJLoGRYEjQ8HEUECO5cRagZXV1MZqzhnv.R136Lv32J1jOW2','radu@niculae.ro','http://gravatar.com/avatar/0966172c7082cf6064f5f0a44557ffda?d=identicon','2020-05-06 20:25:20','2020-05-06 20:25:20'),(3,'Radu','radnic26','$2a$10$2kVPVz66oebyau.lxXZbB.DEhAhluR.p/on3A37uXj0ecutGe0a0S','niculaeradu17@stud.ase.ro','http://gravatar.com/avatar/c2ac58ab00cbfbc59321f01659b88399?d=identicon','2020-05-21 18:16:56','2020-05-21 18:16:56'),(4,'oana','oana','$2a$10$VLU74jgufO1i7cFn5bV8iOOQx3U/RNIoKyWMxv6nhIv1nBNsTmDSa','onici.oana@yahoo.com','http://gravatar.com/avatar/901643fe4d7c50155588f660aa0fad42?d=identicon','2020-05-21 18:29:25','2020-05-21 18:29:25'),(5,'Adrian Niculae','adniculae','$2a$10$R3LDzZlNt52iIsZ.zNUNWOBX2goO6fj8edXujHqskqAHmviox4U82','adniculae@gmail.com','http://gravatar.com/avatar/c73f6dd9b8e7613eb98100e532ceeb40?d=identicon','2020-05-21 19:08:08','2020-05-21 19:08:08'),(6,'Andreea Voinea','Andreea','$2a$10$jIy3uMxVT5Da9.0rH8YFLO0fDGWlc3QM/fNUadfkyHPg.0ut6fiva','oackydreea@yahoo.com','http://gravatar.com/avatar/4fb239aa5c7412203774a39f1099ec3f?d=identicon','2020-05-23 09:47:37','2020-05-23 09:47:37'),(7,'Radu','raduuuu','$2a$10$vftyjYt7SOoxwBm3ui6sAODyjTnaBlMWCtcMdGNz29jU1hOPLOtUy','radu@raduu.ro','http://gravatar.com/avatar/963cf506ae1cc5ba15765fc7dc41dffe?d=identicon','2020-05-25 18:18:10','2020-05-25 18:18:10'),(8,'Alexandru Marius Bara','blaesar','$2a$10$rmdjaDvpTG8hhO8cnohAvutxroGb0xxblTcs6k4cBWqWPQPVxMVYu','bara.alex.m@gmail.com','http://gravatar.com/avatar/f87c83c6d39bb57a6ae6cc69dacfc142?d=identicon','2020-05-30 22:02:50','2020-05-30 22:02:50'),(9,'Antonia Niculae','Antonia','$2a$10$FYFlxtQfzaYLoBn4QaQriekn6DQbDbj7j2L8XjCmkXfEtfNSRxT6m','antonia.niculae@yahoo.com','http://gravatar.com/avatar/16a280838f8f76cd58462888f5617cfa?d=identicon','2020-05-31 09:01:53','2020-05-31 09:01:53'),(10,'Radu Niculae','psbbc','$2a$10$Bp386jsDFWDvhu8/Mpg3V.WDKnwHi4uceIYdRgzTohrOpS0hoYsmu','radu.niculae@bbc.co.uk','http://gravatar.com/avatar/5435df4dd17e1cc4bc7fc8a4995adecb?d=identicon','2020-05-31 09:46:21','2020-05-31 09:46:21'),(11,'qwerty','qwerty','$2a$10$AiXlri5kuSmbT7Nu/kNXIeP83sOGAecSwbkP6LJx2gGZq1Q06tvCC','asd@asd.com','http://gravatar.com/avatar/0eb178cec364c022a189c3814e5f7483?d=identicon','2020-05-31 12:00:56','2020-05-31 12:00:56');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-31 16:28:22
