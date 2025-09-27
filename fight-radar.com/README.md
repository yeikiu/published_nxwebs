# UFC Radar Dataset Maintenance

## Dataset Maintenance Schedule

### Weekly (every 7 days) - **REQUIRED**
```bash
# Update existing fighters with latest fight data
node scripts/update_all_fighters.js --verbose
```
- **Runtime**: 2-6 hours depending on roster size
- **Purpose**: Updates all fighter stats with recent fights (36-month window)
- **Auto-cleanup**: Removes inactive fighters (no fights in 36 months)

### Monthly (every 30 days) - **REQUIRED**
```bash
# Add new active UFC fighters to database
node scripts/check_fighters_and_divisions.js --verbose
```
- **Runtime**: 3-8 hours
- **Purpose**: Discovers and adds new active fighters from UFC roster
- **Only processes**: Fighters with activity in last 36 months

### Individual Fighter Updates - **AS NEEDED**
```bash
# Update specific fighter
node scripts/ufc_data_crawler.js "http://ufcstats.com/fighter-details/[fighter-id]" --persist --verbose
```
- **When**: After major fights or roster changes
- **Runtime**: 30-60 seconds per fighter

## Script Execution Order

1. **Primary Maintenance** (run weekly):
   ```bash
   node scripts/update_all_fighters.js --verbose
   ```

2. **New Fighter Discovery** (run monthly):
   ```bash
   node scripts/check_fighters_and_divisions.js --verbose
   ```

3. **Individual Updates** (run as needed):
   ```bash
   node scripts/ufc_data_crawler.js "[fighter-url]" --persist --verbose
   ```

## Script Details

### `update_all_fighters.js` - **Primary Maintenance Tool**
- **User invocation**: Required weekly
- **Internal calls**: Uses `ufc_data_crawler.js` automatically
- **Rate limiting**: 5-15 second delays between fighters
- **Auto-cleanup**: Removes inactive fighters at completion
- **Resumable**: Can specify ranges with `start_index end_index`
- **Picture-only mode**: `--picture-only` for image updates only

### `check_fighters_and_divisions.js` - **New Fighter Discovery**
- **User invocation**: Required monthly
- **Internal calls**: Uses `ufc_data_crawler.js` automatically
- **Rate limiting**: 15-45 second delays between fighters
- **Active-only**: Only processes fighters with recent activity
- **Incremental**: Can target specific letters with `[letters]`

### `ufc_data_crawler.js` - **Core Data Engine**
- **User invocation**: For individual fighters only
- **Internal calls**: Called by other scripts automatically
- **Never run manually**: For batch operations (use parent scripts)
- **Output format**: Includes opponent names in new `MM/YY:OpponentName` format

### `ufc_picture_crawler.js` - **Utility Script**
- **User invocation**: Rarely needed (internal tool)
- **Purpose**: Standalone picture URL fetching
- **Called by**: `ufc_data_crawler.js` automatically

## Critical Notes

- **Never run scripts in parallel** - Risk of rate limiting/IP blocks
- **Always use `--verbose`** - Essential for monitoring progress
- **Monitor rate limits** - Scripts include delays to prevent blocking
- **CSV auto-backup** - Scripts preserve data integrity
- **Opponent data** - New format includes opponent names for enhanced analysis

## Data Location
- **CSV Database**: `public/data/ALL_DIVISIONS_DATA_WITH_URLS.csv`
- **Format**: Enhanced with opponent names in `Dates_36m` field
- **Auto-cleanup**: Inactive fighters removed automatically