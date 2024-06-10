-- CreateTable
CREATE TABLE `Commissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rate` DECIMAL(65, 30) NOT NULL,
    `status` INTEGER NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
