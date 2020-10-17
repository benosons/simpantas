/*
 Navicat Premium Data Transfer

 Source Server         : sim_pantas
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : simpantas

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 17/10/2020 22:18:03
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for kabupaten_kota
-- ----------------------------
DROP TABLE IF EXISTS `kabupaten_kota`;
CREATE TABLE `kabupaten_kota`  (
  `id` int(100) NOT NULL,
  `id_provinsi` int(100) NOT NULL,
  `nama` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL
) ENGINE = MyISAM CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of kabupaten_kota
-- ----------------------------
INSERT INTO `kabupaten_kota` VALUES (3201, 32, 'Kabupaten Bogor');
INSERT INTO `kabupaten_kota` VALUES (3202, 32, 'Kabupaten Sukabumi');
INSERT INTO `kabupaten_kota` VALUES (3203, 32, 'Kabupaten Cianjur');
INSERT INTO `kabupaten_kota` VALUES (3204, 32, 'Kabupaten Bandung');
INSERT INTO `kabupaten_kota` VALUES (3205, 32, 'Kabupaten Garut');
INSERT INTO `kabupaten_kota` VALUES (3206, 32, 'Kabupaten Tasikmalaya');
INSERT INTO `kabupaten_kota` VALUES (3207, 32, 'Kabupaten Ciamis');
INSERT INTO `kabupaten_kota` VALUES (3208, 32, 'Kabupaten Kuningan');
INSERT INTO `kabupaten_kota` VALUES (3209, 32, 'Kabupaten Cirebon');
INSERT INTO `kabupaten_kota` VALUES (3210, 32, 'Kabupaten Majalengka');
INSERT INTO `kabupaten_kota` VALUES (3211, 32, 'Kabupaten Sumedang');
INSERT INTO `kabupaten_kota` VALUES (3212, 32, 'Kabupaten Indramayu');
INSERT INTO `kabupaten_kota` VALUES (3213, 32, 'Kabupaten Subang');
INSERT INTO `kabupaten_kota` VALUES (3214, 32, 'Kabupaten Purwakarta');
INSERT INTO `kabupaten_kota` VALUES (3215, 32, 'Kabupaten Karawang');
INSERT INTO `kabupaten_kota` VALUES (3216, 32, 'Kabupaten Bekasi');
INSERT INTO `kabupaten_kota` VALUES (3217, 32, 'Kabupaten Bandung Barat');
INSERT INTO `kabupaten_kota` VALUES (3218, 32, 'Kabupaten Pangandaran');
INSERT INTO `kabupaten_kota` VALUES (3271, 32, 'Kota Bogor');
INSERT INTO `kabupaten_kota` VALUES (3272, 32, 'Kota Sukabumi');
INSERT INTO `kabupaten_kota` VALUES (3273, 32, 'Kota Bandung');
INSERT INTO `kabupaten_kota` VALUES (3274, 32, 'Kota Cirebon');
INSERT INTO `kabupaten_kota` VALUES (3275, 32, 'Kota Bekasi');
INSERT INTO `kabupaten_kota` VALUES (3276, 32, 'Kota Depok');
INSERT INTO `kabupaten_kota` VALUES (3277, 32, 'Kota Cimahi');
INSERT INTO `kabupaten_kota` VALUES (3278, 32, 'Kota Tasikmalaya');
INSERT INTO `kabupaten_kota` VALUES (3279, 32, 'Kota Banjar');

-- ----------------------------
-- Table structure for muser
-- ----------------------------
DROP TABLE IF EXISTS `muser`;
CREATE TABLE `muser`  (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `password` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `kotaKab` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `kategori` enum('superAdmin','admin') CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `created_by` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `updated_by` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `role` int(16) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 7 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of muser
-- ----------------------------
INSERT INTO `muser` VALUES (1, 'admin', '827ccb0eea8a706c4c34a16891f84e7b', 'Admnistrator', 'superAdmin', NULL, NULL, NULL, NULL, 10);
INSERT INTO `muser` VALUES (5, 'saya', '827ccb0eea8a706c4c34a16891f84e7b', 'Kabupaten Bekasi', 'admin', 'admin', 'admin', '2020-09-05 06:16:29', '2020-09-09 17:35:20', 20);
INSERT INTO `muser` VALUES (6, 'user', '827ccb0eea8a706c4c34a16891f84e7b', 'Kota Bandung', 'admin', 'admin', 'admin', '2020-09-05 06:16:29', NULL, 30);

-- ----------------------------
-- Table structure for pangan
-- ----------------------------
DROP TABLE IF EXISTS `pangan`;
CREATE TABLE `pangan`  (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `nama` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `tgl` date NULL DEFAULT NULL,
  `jenisPangan` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `created_by` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `updated_by` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `created_at` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `updated_at` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pangan
-- ----------------------------
INSERT INTO `pangan` VALUES (2, 'dummy', '2020-09-05', 'reeer', 'test', NULL, '2020-09-05 07:10:20', NULL);
INSERT INTO `pangan` VALUES (3, 'Test', '0000-00-00', 'Mangga', 'test', NULL, '2020-09-06 23:06:42', NULL);

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `id_role` int(16) NOT NULL,
  `role_name` varchar(32) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `role_desc` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_role`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (10, 'superadmin', 'Super Admin');
INSERT INTO `role` VALUES (20, 'Admin', 'Admin');
INSERT INTO `role` VALUES (30, 'User', 'User Biasa');

SET FOREIGN_KEY_CHECKS = 1;
