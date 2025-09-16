/*
  Warnings:

  - A unique constraint covering the columns `[orderCode]` on the table `Orders` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `orderCode` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Orders" ADD COLUMN     "orderCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Orders_orderCode_key" ON "public"."Orders"("orderCode");
