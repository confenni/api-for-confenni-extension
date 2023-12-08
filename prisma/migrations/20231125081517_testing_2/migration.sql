/*
  Warnings:

  - You are about to drop the `ArticleDetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `ArticleDetails`;

-- CreateTable
CREATE TABLE `article_details` (
    `id` CHAR(32) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `orcid_id` VARCHAR(20) NOT NULL,
    `google_scholar` VARCHAR(20) NOT NULL,
    `orcid_email` VARCHAR(100) NOT NULL,
    `google_email` VARCHAR(100) NOT NULL,
    `wallet_address` CHAR(42) NOT NULL,
    `article_urls` VARCHAR(100) NOT NULL,
    `article_doi` VARCHAR(100) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
