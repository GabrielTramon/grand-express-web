-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('ADMIN', 'DELIVERY_MAN', 'CLIENT');

-- CreateTable
CREATE TABLE "public"."Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL,
    "companyId" TEXT,
    "nationalId" TEXT NOT NULL,
    "lastLoginDate" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "createdById" TEXT,
    "updatedById" TEXT,
    "deletedById" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "public"."Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_phone_key" ON "public"."Users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Users_nationalId_key" ON "public"."Users"("nationalId");

-- AddForeignKey
ALTER TABLE "public"."Users" ADD CONSTRAINT "Users_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "public"."Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Users" ADD CONSTRAINT "Users_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "public"."Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Users" ADD CONSTRAINT "Users_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "public"."Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
