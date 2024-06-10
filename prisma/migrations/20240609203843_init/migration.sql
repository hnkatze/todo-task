/*
  Warnings:

  - You are about to drop the column `decriptions` on the `Task` table. All the data in the column will be lost.
  - Added the required column `descriptions` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "descriptions" TEXT NOT NULL,
    "priority" TEXT NOT NULL DEFAULT 'low',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Task" ("createdAt", "id", "name", "priority", "updatedAt") SELECT "createdAt", "id", "name", "priority", "updatedAt" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
