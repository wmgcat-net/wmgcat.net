ALTER TABLE "games" RENAME TO "instances";--> statement-breakpoint
ALTER TABLE "instances" ADD COLUMN "type" "type" DEFAULT 'game' NOT NULL;--> statement-breakpoint
ALTER TABLE "instances" ADD COLUMN "author" text DEFAULT 'wmgcat' NOT NULL;