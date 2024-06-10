/*
  Warnings:

  - Added the required column `modified` to the `Countries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Countries` ADD COLUMN `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `modified` DATETIME(3) NOT NULL;
