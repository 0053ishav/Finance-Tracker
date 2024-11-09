ALTER TABLE "accounts" ADD COLUMN "id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "plaid_id" text;--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "user_id" text NOT NULL;