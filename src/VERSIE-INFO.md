# INSPOT Website Versies

## Huidige actieve versie: ZONDER ticketverkoop
De huidige website (App.tsx en gerelateerde bestanden) heeft GEEN ticketverkoop functionaliteit.

## Backup versie: MET ticketverkoop
Er zijn backup bestanden gemaakt van de vorige versie met ticketverkoop:

### Bestanden met ticketverkoop (backup):
- `/App-met-tickets.tsx` - App component met /tickets route
- `/components/Navigation-met-tickets.tsx` - Navigatie met Tickets knop
- `/pages/ExpoPage-met-tickets.tsx` - Expo pagina met "Tickets kopen" knop
- `/pages/WorkshopsPage-met-tickets.tsx` - Workshops pagina met "Tickets kopen" knop
- `/pages/ConcertPage-met-tickets.tsx` - Concert pagina met "Tickets kopen" knop
- `/pages/TicketsPage.tsx` - Volledige tickets pagina (nog steeds aanwezig)
- `/components/Tickets.tsx` - Tickets component (nog steeds aanwezig)

## Om terug te schakelen naar de versie MET tickets:

1. Hernoem `App.tsx` naar `App-zonder-tickets.tsx` (als backup)
2. Hernoem `App-met-tickets.tsx` naar `App.tsx`
3. Update de imports in `App.tsx`:
   - Import `NavigationMetTickets` en hernoem naar `Navigation`
   - Of update Navigation.tsx met de inhoud van Navigation-met-tickets.tsx
4. Update de detailpagina's met de versies die tickets hebben (optioneel)

## Om te blijven werken zonder tickets:
Gebruik gewoon de huidige bestanden zoals ze zijn (App.tsx, Navigation.tsx, etc.)
