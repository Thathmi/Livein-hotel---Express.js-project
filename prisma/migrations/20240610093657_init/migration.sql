-- CreateTable
CREATE TABLE `Hotel` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `property_id` INTEGER NOT NULL,
    `country_id` INTEGER NOT NULL,
    `state_id` INTEGER NOT NULL,
    `city_id` INTEGER NOT NULL,
    `commission_id` INTEGER NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `longitute` VARCHAR(191) NOT NULL,
    `latitude` VARCHAR(191) NOT NULL,
    `minimum_stay` INTEGER NOT NULL,
    `refund_type` INTEGER NOT NULL,
    `status` INTEGER NOT NULL,
    `modified` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
