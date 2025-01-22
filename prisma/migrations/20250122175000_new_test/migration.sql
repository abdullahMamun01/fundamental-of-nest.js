-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
