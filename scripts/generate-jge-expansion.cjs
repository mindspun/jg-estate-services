const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const root = fs.existsSync(path.join(repoRoot, "public"))
  ? repoRoot
  : path.join(repoRoot, "artifacts", "jgestates-com");
const publicDir = path.join(root, "public");
const assetsCss = path.join(publicDir, "assets", "css");

const bookingPath = "/contact/#booking";
const bookingFormUrl = "https://clienthub.getjobber.com/hubs/70ad09c0-29e5-4b3f-b648-6642ff3dff80/public/requests/4647724";
const phoneHref = "tel:+12626990100";
const phoneLabel = "262-699-0100";

const services = [
  {
    slug: "estate-cleanouts",
    title: "Estate Cleanouts in SE Wisconsin | JG Estate Services",
    description: "Estate cleanout help from a West Bend hauling company. We sort household contents, remove furniture and appliances, and clear the property.",
    eyebrow: "Property cleanouts",
    heading: "Estate cleanouts with a clear plan",
    intro: "JG Estate Services helps families, executors, real estate professionals, and property managers clear homes after a move, sale, or family transition.",
    detailHeading: "What an estate cleanout can include",
    detail: "We can remove household contents, furniture, appliances, mattresses, garage items, basement contents, and yard debris. Send photos when you can so we can understand the size and access before scheduling.",
    items: ["Whole-house contents", "Furniture and appliances", "Garage, attic, and basement items", "Yard debris and outdoor items", "Sorting for donation and recycling"],
    noteHeading: "A practical approach for families",
    note: "We load the material ourselves and work room by room or area by area. Usable items are separated for donation when appropriate; the remaining material goes to the proper disposal or recycling facility.",
    related: [["House cleanouts", "house-cleanouts.html"], ["Furniture removal", "furniture-removal.html"], ["Appliance removal", "appliance-removal.html"], ["Garage cleanouts", "garage-cleanouts.html"], ["Service areas", "service-areas.html"]],
  },
  {
    slug: "hoarder-cleanouts",
    title: "Hoarding Cleanout Help in SE Wisconsin | JG Estate Services",
    description: "Respectful property cleanout help for heavily cluttered homes in SE Wisconsin. JG Estate Services handles sorting, loading, hauling, and disposal.",
    eyebrow: "Specialized cleanouts",
    heading: "Respectful help for heavily cluttered properties",
    intro: "JG Estate Services provides practical, non-judgmental hauling support when a home has more contents than the household can manage alone.",
    detailHeading: "How we can help",
    detail: "We can work through household items, furniture, appliances, boxes, garage contents, and general debris. The work can be organized by room, floor, or priority area, depending on what the property needs.",
    items: ["Room-by-room household clearing", "Furniture and appliance removal", "Boxed items and general junk", "Garage, basement, and outbuilding clearing", "Donation and recycling sorting when practical"],
    noteHeading: "Clear scope, careful work",
    note: "We are a hauling and cleanout company. We do not provide clinical, counseling, biohazard, asbestos, hazardous-material, or structural remediation services. Contact us with photos and the property location so we can confirm whether the material is within our scope.",
    related: [["Estate cleanouts", "estate-cleanouts.html"], ["House cleanouts", "house-cleanouts.html"], ["Basement cleanouts", "basement-cleanouts.html"], ["Contact JG Estate Services", "contact.html"]],
  },
  {
    slug: "house-cleanouts",
    title: "House Cleanouts in SE Wisconsin | JG Estate Services",
    description: "Full and partial house cleanouts in SE Wisconsin. We remove household contents, furniture, appliances, and general junk with volume-based estimates.",
    eyebrow: "Residential cleanouts",
    heading: "House cleanouts, room by room",
    intro: "When a house needs to be cleared before a sale, move, renovation, or handoff, JG Estate Services can handle the loading and hauling.",
    detailHeading: "Common house cleanout items",
    detail: "House cleanouts often include furniture, mattresses, appliances, boxes, electronics, basement contents, garage items, and outdoor debris. We can discuss a full-property cleanout or a smaller set of rooms.",
    items: ["Living room and bedroom furniture", "Appliances and mattresses", "Boxes, household goods, and electronics", "Basement and attic contents", "Garage and yard items"],
    noteHeading: "Estimate from photos",
    note: "Pricing is primarily based on the volume of material. Photos of the items and a note about stairs, tight access, or distance from the truck help us prepare an estimate before the job.",
    related: [["Estate cleanouts", "estate-cleanouts.html"], ["Garage cleanouts", "garage-cleanouts.html"], ["Basement cleanouts", "basement-cleanouts.html"], ["Furniture removal", "furniture-removal.html"], ["Pricing", "pricing.html"]],
  },
  {
    slug: "garage-cleanouts",
    title: "Garage Cleanouts in SE Wisconsin | JG Estate Services",
    description: "Garage cleanout and junk removal in SE Wisconsin. We load old tools, furniture, appliances, boxes, yard items, and general garage clutter.",
    eyebrow: "Garage cleanouts",
    heading: "Get the garage usable again",
    intro: "A garage cleanout does not have to become a second project. JG Estate Services removes the items you no longer want and loads them into our hauling trailer.",
    detailHeading: "Garage items we can remove",
    detail: "We handle household overflow, old furniture, appliances, boxes, shelving, tools, exercise equipment, and many common outdoor items. Send a few photos for a volume-based estimate.",
    items: ["Old furniture and shelving", "Appliances and electronics", "Boxes and household overflow", "Tools and exercise equipment", "Outdoor and yard items"],
    noteHeading: "Curbside or inside the garage",
    note: "You can stage items near the garage or have us load from inside. Let us know about stairs, narrow driveways, or anything that needs to be disassembled before loading.",
    related: [["House cleanouts", "house-cleanouts.html"], ["Basement cleanouts", "basement-cleanouts.html"], ["Yard debris removal", "yard-debris-removal.html"], ["Furniture removal", "furniture-removal.html"]],
  },
  {
    slug: "basement-cleanouts",
    title: "Basement Cleanouts in SE Wisconsin | JG Estate Services",
    description: "Basement cleanouts across SE Wisconsin. JG Estate Services removes furniture, boxes, appliances, and general contents from basements and lower levels.",
    eyebrow: "Basement cleanouts",
    heading: "Basement clearing without the heavy lifting",
    intro: "Basements collect furniture, boxes, appliances, and household overflow. We can clear the material and haul it away so the space is ready for its next use.",
    detailHeading: "What we commonly remove",
    detail: "Typical basement cleanouts include old couches, shelving, mattresses, boxes, exercise equipment, appliances, and miscellaneous household items. Photos help us account for stairs and access.",
    items: ["Furniture and mattresses", "Boxes and household goods", "Shelving and exercise equipment", "Appliances and electronics", "General basement debris"],
    noteHeading: "Access matters",
    note: "When you request an estimate, include photos of the items and the route from the basement to the truck. That gives us a more useful picture of the job before we arrive.",
    related: [["House cleanouts", "house-cleanouts.html"], ["Estate cleanouts", "estate-cleanouts.html"], ["Furniture removal", "furniture-removal.html"], ["Appliance removal", "appliance-removal.html"]],
  },
  {
    slug: "rental-property-cleanouts",
    title: "Rental Property Cleanouts in SE Wisconsin | JG Estate Services",
    description: "Rental and property cleanouts for landlords and property managers in SE Wisconsin. Remove left-behind furniture, appliances, trash, and debris.",
    eyebrow: "Property management",
    heading: "Rental property cleanouts between tenants",
    intro: "JG Estate Services helps landlords, property managers, and owners clear contents after a move-out, eviction, renovation, or property sale.",
    detailHeading: "A cleanout for the next handoff",
    detail: "We can remove abandoned furniture, mattresses, appliances, boxes, household junk, garage contents, and outdoor debris. Share the property address, photos, and access details for an initial scope.",
    items: ["Left-behind furniture and mattresses", "Appliances and household goods", "Garage and storage contents", "Exterior and yard debris", "Post-renovation junk and light debris"],
    noteHeading: "Useful for owners and managers",
    note: "We can coordinate around lockboxes, vacant units, and property access instructions. Pricing is primarily volume-based, with the quote confirmed before loading begins.",
    related: [["Estate cleanouts", "estate-cleanouts.html"], ["House cleanouts", "house-cleanouts.html"], ["Commercial junk removal", "commercial-junk-removal.html"], ["Contact us", "contact.html"]],
  },
  {
    slug: "commercial-junk-removal",
    title: "Commercial Junk Removal in SE Wisconsin | JG Estate Services",
    description: "Commercial junk removal for offices, shops, rentals, and small businesses across SE Wisconsin. We load and haul furniture, fixtures, and general debris.",
    eyebrow: "Commercial hauling",
    heading: "Commercial junk removal that keeps work moving",
    intro: "JG Estate Services clears unwanted items from offices, shops, rental properties, and other commercial spaces across southeastern Wisconsin.",
    detailHeading: "Commercial items we can haul",
    detail: "We handle office furniture, shelving, appliances, boxes, electronics, fixtures, and general non-hazardous debris. Larger clearouts can be scoped from photos and a short description of the site.",
    items: ["Desks, chairs, and office furniture", "Shelving, fixtures, and displays", "Appliances and break-room items", "Boxes and general business junk", "Light renovation and demo debris"],
    noteHeading: "Plan around your site",
    note: "Tell us about loading docks, stairs, elevators, parking, and access hours when requesting an estimate. We do not handle hazardous materials, asbestos, or structural demolition.",
    related: [["Construction debris removal", "construction-debris-removal.html"], ["Rental property cleanouts", "rental-property-cleanouts.html"], ["Furniture removal", "furniture-removal.html"], ["Pricing", "pricing.html"]],
  },
  {
    slug: "furniture-removal",
    title: "Furniture Removal in SE Wisconsin | JG Estate Services",
    description: "Furniture removal in SE Wisconsin for homes, rentals, offices, and estates. We load couches, tables, beds, dressers, shelving, and more.",
    eyebrow: "Single-item pickup",
    heading: "Furniture removal without the wrestling match",
    intro: "JG Estate Services removes unwanted furniture from homes, apartments, offices, rentals, and estate properties throughout our service area.",
    detailHeading: "Furniture we can remove",
    detail: "Common pickups include couches, sectionals, recliners, tables, chairs, beds, mattresses, dressers, bookcases, desks, and shelving. Send a photo and let us know where the item is located.",
    items: ["Couches, sectionals, and chairs", "Tables and desks", "Beds, mattresses, and dressers", "Bookcases and shelving", "Office and rental furniture"],
    noteHeading: "Tell us about access",
    note: "Photos of the item and the path to the truck help us plan for stairs, elevators, tight hallways, or disassembly. Usable items may be separated for donation when appropriate.",
    related: [["Mattress removal", "mattress-removal.html"], ["Estate cleanouts", "estate-cleanouts.html"], ["House cleanouts", "house-cleanouts.html"], ["Appliance removal", "appliance-removal.html"]],
  },
  {
    slug: "appliance-removal",
    title: "Appliance Removal in SE Wisconsin | JG Estate Services",
    description: "Appliance removal across SE Wisconsin. JG Estate Services hauls refrigerators, washers, dryers, stoves, dishwashers, and other household appliances.",
    eyebrow: "Large-item hauling",
    heading: "Appliance removal with the loading handled",
    intro: "Old appliances are heavy, awkward, and difficult to move safely. We load and haul common household and rental-property appliances.",
    detailHeading: "Appliances we commonly remove",
    detail: "We can discuss refrigerators, freezers, washers, dryers, ranges, ovens, dishwashers, and similar household appliances. Tell us whether the appliance is connected, in place, or already disconnected.",
    items: ["Refrigerators and freezers", "Washers and dryers", "Ranges and ovens", "Dishwashers", "Common household appliances"],
    noteHeading: "A few details help",
    note: "Send photos and mention stairs, tight doorways, or built-in units. Some specialty items may require separate handling or may not be accepted; we will confirm the scope before the pickup.",
    related: [["Furniture removal", "furniture-removal.html"], ["House cleanouts", "house-cleanouts.html"], ["Estate cleanouts", "estate-cleanouts.html"], ["Pricing", "pricing.html"]],
  },
  {
    slug: "mattress-removal",
    title: "Mattress Removal in SE Wisconsin | JG Estate Services",
    description: "Mattress and box spring removal in SE Wisconsin. We pick up old mattresses from homes, rentals, estates, and property cleanouts.",
    eyebrow: "Single-item pickup",
    heading: "Mattress removal without the awkward trip",
    intro: "JG Estate Services can remove old mattresses and box springs as part of a single-item pickup or a larger home, rental, or estate cleanout.",
    detailHeading: "What to send with your request",
    detail: "A photo of the mattress, its location, and the number of items helps us understand the pickup. Let us know if it is upstairs, in a basement, or already outside.",
    items: ["Mattresses", "Box springs", "Bed frames", "Bedroom furniture", "Mattresses included in full cleanouts"],
    noteHeading: "Clear access makes pickup easier",
    note: "We handle the loading. If the item is staged near the driveway or curb, include that in your message; if it is inside, share access details so we can plan the route.",
    related: [["Furniture removal", "furniture-removal.html"], ["House cleanouts", "house-cleanouts.html"], ["Basement cleanouts", "basement-cleanouts.html"], ["Contact us", "contact.html"]],
  },
  {
    slug: "yard-debris-removal",
    title: "Yard Debris Removal in SE Wisconsin | JG Estate Services",
    description: "Yard debris removal across SE Wisconsin. We haul brush, branches, storm debris, old outdoor items, and other non-hazardous yard junk.",
    eyebrow: "Outdoor cleanup",
    heading: "Yard debris removal after the project",
    intro: "JG Estate Services hauls away common non-hazardous yard debris and outdoor items after trimming, landscaping, storms, or a property cleanout.",
    detailHeading: "Outdoor material we can discuss",
    detail: "Typical requests include branches, brush, storm debris, old outdoor furniture, play equipment, and general yard junk. Send photos so we can distinguish loose debris from materials that need a different disposal method.",
    items: ["Branches and brush", "Storm debris", "Old outdoor furniture", "Play equipment and yard items", "Non-hazardous landscaping debris"],
    noteHeading: "Material and access determine the scope",
    note: "Please do not include chemicals, fuel, paint, asbestos, or other hazardous materials. Photos of the pile and the route to the truck help us prepare a volume-based estimate.",
    related: [["Playset removal", "playset-removal.html"], ["Fence removal", "fence-removal.html"], ["Construction debris removal", "construction-debris-removal.html"], ["Service areas", "service-areas.html"]],
  },
  {
    slug: "construction-debris-removal",
    title: "Construction Debris Removal in SE Wisconsin | JG Estate Services",
    description: "Construction and renovation debris removal in SE Wisconsin. We haul wood, drywall, cabinets, flooring, and other non-hazardous project debris.",
    eyebrow: "Renovation cleanup",
    heading: "Construction debris removal after the work",
    intro: "JG Estate Services removes non-hazardous debris from smaller renovation, repair, tear-out, and property-improvement projects.",
    detailHeading: "Project debris we can review",
    detail: "We can discuss wood, drywall, cabinets, flooring, trim, fixtures, and other common non-hazardous construction debris. Send photos of the pile and tell us whether it is inside, curbside, or at a job site.",
    items: ["Wood and trim", "Drywall and flooring", "Cabinets and fixtures", "Renovation leftovers", "Debris from light tear-outs"],
    noteHeading: "Know the boundary",
    note: "We do not provide structural demolition, excavation, asbestos work, hazardous-material work, or hazardous waste disposal. We can review the debris-removal portion of a project before scheduling.",
    related: [["Demolition services", "demolition.html"], ["Interior demolition", "interior-demolition.html"], ["Cabinet removal", "cabinet-removal.html"], ["Flooring removal", "flooring-removal.html"]],
  },
  {
    slug: "demolition-debris-removal",
    title: "Demolition Debris Removal in SE Wisconsin | JG Estate Services",
    description: "Demolition debris removal for smaller projects in SE Wisconsin. We load and haul wood, drywall, cabinets, flooring, fixtures, and similar non-hazardous debris.",
    eyebrow: "Demo cleanup",
    heading: "Demolition debris removal after the tear-out",
    intro: "JG Estate Services loads and hauls non-hazardous debris from selected light demolition and renovation projects throughout our six-county service area.",
    detailHeading: "Debris we can review",
    detail: "Common requests include wood, drywall, cabinets, flooring, trim, fixtures, fence panels, deck boards, and material from small tear-outs. Photos help us identify the material and estimate the load volume.",
    items: ["Wood, trim, and deck boards", "Drywall and non-hazardous wall material", "Cabinets, flooring, and fixtures", "Fence, shed, and playset debris", "Loading and hauling from the property"],
    noteHeading: "Keep hazardous material out of the pile",
    note: "We do not accept asbestos, chemicals, fuel, wet paint, biohazards, or other hazardous materials. We also do not provide structural demolition or excavation. Tell us who completed the tear-out and what material is in the pile.",
    related: [["Light demolition", "demolition.html"], ["Construction debris removal", "construction-debris-removal.html"], ["Interior demolition", "interior-demolition.html"], ["Small structure tear-downs", "small-structure-teardowns.html"], ["Service areas", "service-areas.html"]],
  },
  {
    slug: "demolition",
    title: "Light Demolition and Tear-Outs in SE Wisconsin | JG Estate Services",
    description: "Light demolition and non-structural tear-out help in SE Wisconsin. We remove sheds, decks, cabinets, flooring, fences, and the resulting debris.",
    eyebrow: "Light demolition",
    heading: "Light demolition for smaller property projects",
    intro: "JG Estate Services handles light demolition, tear-outs, and small structure removals, then loads and hauls the resulting material.",
    detailHeading: "Demolition work we can discuss",
    detail: "Our demolition work includes shed removal, hot tub removal, deck and fence removal, playset removal, cabinet and flooring removal, and interior tear-outs.",
    items: ["Shed and small structure removal", "Hot tub removal", "Deck and fence removal", "Playset removal", "Cabinet, flooring, and interior tear-outs"],
    noteHeading: "Light demolition only",
    note: "We handle selected non-structural projects. We do not provide major structural demolition, excavation, asbestos work, or hazardous-material work.",
    related: [["Shed removal", "shed-removal.html"], ["Hot tub removal", "hot-tub-removal.html"], ["Deck removal", "deck-removal.html"], ["Fence removal", "fence-removal.html"], ["Playset removal", "playset-removal.html"], ["Cabinet removal", "cabinet-removal.html"], ["Flooring removal", "flooring-removal.html"], ["Interior tear-outs", "interior-demolition.html"], ["Small structure tear-downs", "small-structure-teardowns.html"], ["Demolition debris removal", "demolition-debris-removal.html"]],
  },
  {
    slug: "small-structure-teardowns",
    title: "Small Structure Tear-Downs in SE Wisconsin | JG Estate Services",
    description: "Small non-structural tear-downs in SE Wisconsin. JG Estate Services reviews detached sheds, play structures, and similar projects before removal.",
    eyebrow: "Small structure removal",
    heading: "Small structure tear-downs with haul-away",
    intro: "JG Estate Services takes down detached sheds, play structures, and similar small structures, then loads and hauls away the debris.",
    detailHeading: "Small structures we can remove",
    detail: "Send photos from every side, approximate dimensions, the base or foundation, nearby structures, overhead lines, gates, and the route to the truck.",
    items: ["Detached sheds", "Wood play structures", "Small freestanding outdoor structures", "Structure contents when included in the quote", "Tear-down debris loading and hauling"],
    noteHeading: "Light demolition only",
    note: "We do not remove load-bearing building sections, perform excavation, disconnect utilities, or handle asbestos and hazardous materials. Permit checks, utility identification, and ownership approval remain the property owner’s responsibility.",
    related: [["Light demolition", "demolition.html"], ["Shed removal", "shed-removal.html"], ["Playset removal", "playset-removal.html"], ["Demolition debris removal", "demolition-debris-removal.html"], ["Service areas", "service-areas.html"]],
  },
  {
    slug: "shed-removal",
    title: "Shed Removal in SE Wisconsin | JG Estate Services",
    description: "Small shed removal and hauling in SE Wisconsin. We take down selected non-structural sheds and remove the structure and debris.",
    eyebrow: "Small structure removal",
    heading: "Shed removal with the debris hauled away",
    intro: "JG Estate Services takes down small sheds, loads the material, and hauls away the structure and related debris.",
    detailHeading: "What shed removal includes",
    detail: "Send photos of the shed from each side, its approximate size, the foundation or floor, nearby fences, and the path to the truck. This lets us determine whether the project is a fit.",
    items: ["Small sheds", "Wood shed panels and flooring", "Shelving and contents", "Roofing and trim from the tear-out", "Loading and debris hauling"],
    noteHeading: "Light demolition only",
    note: "We do not perform structural demolition, excavation, asbestos work, hazardous-material work, or work that requires permits or specialized remediation outside this service scope.",
    related: [["Light demolition", "demolition.html"], ["Small structure tear-downs", "small-structure-teardowns.html"], ["Demolition debris removal", "demolition-debris-removal.html"], ["Construction debris removal", "construction-debris-removal.html"], ["Service areas", "service-areas.html"]],
  },
  {
    slug: "hot-tub-removal",
    title: "Hot Tub Removal in SE Wisconsin | JG Estate Services",
    description: "Hot tub removal and hauling in SE Wisconsin. JG Estate Services reviews access, disconnect status, and surrounding structures before scheduling.",
    eyebrow: "Outdoor removal",
    heading: "Hot tub removal, scoped before the crew arrives",
    intro: "JG Estate Services can break down and remove hot tubs, then load and haul away the pieces and related debris.",
    detailHeading: "Send photos of the setup",
    detail: "Include the hot tub, deck or pad, gates, stairs, overhead wires, and the route to the truck. Tell us whether utilities have already been disconnected by the appropriate professional.",
    items: ["Hot tubs and spas", "Surrounding non-structural panels", "Steps and accessory pieces", "Loading and debris hauling", "Related outdoor junk when included in the scope"],
    noteHeading: "Utilities must be disconnected",
    note: "Utilities must be disconnected by the appropriate professional. We do not perform structural demolition, excavation, or hazardous-material work.",
    related: [["Light demolition", "demolition.html"], ["Deck removal", "deck-removal.html"], ["Yard debris removal", "yard-debris-removal.html"], ["Contact us", "contact.html"]],
  },
  {
    slug: "deck-removal",
    title: "Deck Removal in SE Wisconsin | JG Estate Services",
    description: "Non-structural deck removal and debris hauling in SE Wisconsin. We review the deck, access, height, and disposal scope from project photos.",
    eyebrow: "Outdoor tear-outs",
    heading: "Deck removal for smaller property projects",
    intro: "JG Estate Services removes smaller decks and deck sections, then loads and hauls away the wood and related debris.",
    detailHeading: "What to show in your photos",
    detail: "Send photos showing the deck from the yard, the connection to the house, stairs, railings, height, and access for loading. A clear scope helps us determine whether the job fits our equipment and service.",
    items: ["Deck boards and railings", "Stairs and deck sections", "Attached outdoor furniture", "Wood and project debris", "Loading and hauling after the tear-out"],
    noteHeading: "Light demolition only",
    note: "We do not perform structural demolition, excavation, utility work, asbestos work, or hazardous-material removal. The exact scope must be confirmed before work begins.",
    related: [["Light demolition", "demolition.html"], ["Construction debris removal", "construction-debris-removal.html"], ["Fence removal", "fence-removal.html"], ["Hot tub removal", "hot-tub-removal.html"]],
  },
  {
    slug: "fence-removal",
    title: "Fence Removal in SE Wisconsin | JG Estate Services",
    description: "Fence removal and hauling in SE Wisconsin. We review the fence type, posts, access, and disposal scope before scheduling the project.",
    eyebrow: "Outdoor tear-outs",
    heading: "Fence removal and cleanup",
    intro: "JG Estate Services removes old fence sections, posts, and gates, then loads and hauls away the resulting debris.",
    detailHeading: "What to include in your request",
    detail: "Photos of the full fence line, posts, gates, nearby structures, and access route help us understand the job. Tell us whether the fence has already been detached or still needs a tear-out.",
    items: ["Wood fence panels", "Gates and posts", "Privacy fencing", "Small attached outdoor items", "Loading and debris hauling"],
    noteHeading: "Confirm the property line first",
    note: "The property owner is responsible for confirming the fence can be removed and for identifying utilities before work. We do not perform excavation, utility work, structural demolition, or hazardous-material removal.",
    related: [["Light demolition", "demolition.html"], ["Yard debris removal", "yard-debris-removal.html"], ["Deck removal", "deck-removal.html"], ["Service areas", "service-areas.html"]],
  },
  {
    slug: "playset-removal",
    title: "Playset Removal in SE Wisconsin | JG Estate Services",
    description: "Playset removal and hauling in SE Wisconsin. We can review backyard access, anchoring, size, and the resulting debris from photos.",
    eyebrow: "Outdoor removal",
    heading: "Playset removal from the backyard",
    intro: "JG Estate Services takes down old playsets, loads the pieces, and hauls the material away from the property.",
    detailHeading: "Help us plan the removal",
    detail: "Send photos of the playset, anchors, slides, swings, gates, stairs, and the path to the driveway. Include whether it is wood or another material and if it has already been disassembled.",
    items: ["Wood playsets", "Swings, slides, and accessories", "Small backyard structures", "Anchored sections when accessible", "Loading and debris hauling"],
    noteHeading: "Light demolition only",
    note: "We do not provide excavation, structural demolition, hazardous-material work, or utility work.",
    related: [["Light demolition", "demolition.html"], ["Yard debris removal", "yard-debris-removal.html"], ["Shed removal", "shed-removal.html"], ["Fence removal", "fence-removal.html"]],
  },
  {
    slug: "cabinet-removal",
    title: "Cabinet Removal in SE Wisconsin | JG Estate Services",
    description: "Cabinet removal and renovation debris hauling in SE Wisconsin. We remove selected non-structural cabinets and load the debris.",
    eyebrow: "Interior tear-outs",
    heading: "Cabinet removal for kitchen and bath updates",
    intro: "JG Estate Services removes cabinets, vanities, shelving, and related materials during smaller renovation and cleanout projects.",
    detailHeading: "What to show in your photos",
    detail: "Send photos of the cabinets, countertops, plumbing or electrical connections, walls, and access route. Utilities must be disconnected by the appropriate professional before removal.",
    items: ["Kitchen cabinets", "Bathroom vanities and cabinets", "Shelving and built-ins", "Countertops when included in the scope", "Loading and renovation debris hauling"],
    noteHeading: "Utilities and structural work",
    note: "We do not disconnect utilities, alter load-bearing components, perform structural demolition, or handle asbestos or hazardous materials. The exact work must be confirmed before scheduling.",
    related: [["Interior demolition", "interior-demolition.html"], ["Construction debris removal", "construction-debris-removal.html"], ["Flooring removal", "flooring-removal.html"], ["Commercial junk removal", "commercial-junk-removal.html"]],
  },
  {
    slug: "flooring-removal",
    title: "Flooring Removal in SE Wisconsin | JG Estate Services",
    description: "Selected flooring removal and debris hauling in SE Wisconsin. We review the material, room size, subfloor, and access before scheduling.",
    eyebrow: "Interior tear-outs",
    heading: "Flooring removal and haul-away",
    intro: "JG Estate Services removes flooring from homes and smaller renovation projects, then loads and hauls away the material.",
    detailHeading: "Tell us what is on the floor",
    detail: "Include photos and identify the material if you know it: carpet, laminate, vinyl, tile, or wood. Show the room, thresholds, stairs, subfloor, and route to the truck.",
    items: ["Carpet and pad", "Laminate and vinyl flooring", "Wood flooring", "Tile tear-outs", "Loading and renovation debris"],
    noteHeading: "Material must be identified",
    note: "We do not handle asbestos or hazardous materials, structural demolition, excavation, or work outside the confirmed tear-out scope. Older flooring should be assessed before removal when hazardous material is a possibility.",
    related: [["Interior demolition", "interior-demolition.html"], ["Construction debris removal", "construction-debris-removal.html"], ["Cabinet removal", "cabinet-removal.html"], ["House cleanouts", "house-cleanouts.html"]],
  },
  {
    slug: "interior-demolition",
    title: "Interior Non-Structural Tear-Outs in SE Wisconsin | JG Estate Services",
    description: "Interior non-structural tear-out and debris removal in SE Wisconsin. We review walls, cabinets, flooring, fixtures, access, and project limits.",
    eyebrow: "Interior tear-outs",
    heading: "Interior tear-outs with the debris removed",
    intro: "JG Estate Services handles smaller interior tear-outs, followed by loading and debris hauling.",
    detailHeading: "Projects we can review",
    detail: "Send photos and a short description of the rooms and materials. We can discuss cabinets, flooring, partitions, fixtures, and other light tear-out work.",
    items: ["Cabinet and vanity removal", "Flooring and carpet removal", "Interior sections", "Fixtures and renovation leftovers", "Loading and construction debris hauling"],
    noteHeading: "Light demolition only",
    note: "We do not provide structural demolition, excavation, asbestos work, hazardous-material work, utility disconnection, or specialized remediation.",
    related: [["Light demolition", "demolition.html"], ["Cabinet removal", "cabinet-removal.html"], ["Flooring removal", "flooring-removal.html"], ["Construction debris removal", "construction-debris-removal.html"]],
  },
];

const countyData = [
  { slug: "washington-county", name: "Washington County", cities: [["West Bend", "west-bend"], ["Germantown", "germantown"], ["Hartford", "hartford"], ["Slinger", "slinger"], ["Jackson", "jackson"], ["Kewaskum", "kewaskum"], ["Richfield", "richfield"], ["Barton", "barton"], ["Newburg", "newburg"], ["Allenton", "allenton"], ["Erin", "erin"], ["Addison", "addison"]] },
  { slug: "ozaukee-county", name: "Ozaukee County", cities: [["Cedarburg", "cedarburg"], ["Port Washington", "port-washington"], ["Grafton", "grafton"], ["Mequon", "mequon"], ["Thiensville", "thiensville"], ["Saukville", "saukville"], ["Fredonia", "fredonia"], ["Belgium", "belgium"], ["River Hills", "river-hills"]] },
  { slug: "dodge-county", name: "Dodge County", cities: [["Watertown", "watertown"], ["Juneau", "juneau"], ["Mayville", "mayville"], ["Waupun", "waupun"]] },
  { slug: "fond-du-lac-county", name: "Fond du Lac County", cities: [["Fond du Lac", "fond-du-lac"], ["Ripon", "ripon"], ["Waupun", "waupun"], ["Mayville", "mayville"], ["Campbellsport", "campbellsport"], ["North Fond du Lac", "north-fond-du-lac"], ["Lomira", "lomira"], ["Oakfield", "oakfield"], ["Rosendale", "rosendale"], ["Brandon", "brandon"], ["Eden", "eden"], ["Brownsville", "brownsville"]] },
  { slug: "sheboygan-county", name: "Sheboygan County", cities: [["Sheboygan", "sheboygan"], ["Sheboygan Falls", "sheboygan-falls"], ["Plymouth", "plymouth"], ["Kohler", "kohler"], ["Elkhart Lake", "elkhart-lake"], ["Oostburg", "oostburg"], ["Random Lake", "random-lake"], ["Cedar Grove", "cedar-grove"], ["Kiel", "kiel"], ["Howards Grove", "howards-grove"], ["Waldo", "waldo"], ["Cascade", "cascade"]] },
  { slug: "waukesha-county", name: "Waukesha County", cities: [["Waukesha", "waukesha"], ["Brookfield", "brookfield"], ["Pewaukee", "pewaukee"], ["Oconomowoc", "oconomowoc"], ["Menomonee Falls", "menomonee-falls"], ["New Berlin", "new-berlin"], ["Muskego", "muskego"], ["Mukwonago", "mukwonago"], ["Sussex", "sussex"], ["Delafield", "delafield"], ["Wales", "wales"], ["Hartland", "hartland"], ["Elm Grove", "elm-grove"], ["Dousman", "dousman"]] },
];

const priorityCities = {
  "west-bend": { county: "Washington County", nearby: "Germantown, Hartford, Slinger, Jackson, Kewaskum, and Richfield", jobs: "estate cleanouts, garage and basement clearing, rental turnovers, furniture and appliance pickups, and light demolition debris." },
  germantown: { county: "Washington County", nearby: "West Bend, Richfield, Jackson, and Menomonee Falls", jobs: "house cleanouts, estate contents, garage clearing, furniture removal, and renovation debris." },
  hartford: { county: "Washington County", nearby: "West Bend, Slinger, Jackson, and Kewaskum", jobs: "house and estate cleanouts, appliance removal, garage clearing, and yard debris." },
  jackson: { county: "Washington County", nearby: "West Bend, Germantown, Richfield, and Slinger", jobs: "furniture and appliance removal, rental cleanouts, garage clearing, and household junk." },
  slinger: { county: "Washington County", nearby: "West Bend, Hartford, Kewaskum, and Jackson", jobs: "estate cleanouts, house cleanouts, furniture removal, and construction debris hauling." },
  kewaskum: { county: "Washington County", nearby: "West Bend, Slinger, Barton, and Newburg", jobs: "estate cleanouts, basement and garage clearing, appliance removal, and yard debris." },
  richfield: { county: "Washington County", nearby: "Germantown, Jackson, West Bend, and Menomonee Falls", jobs: "house cleanouts, estate contents, furniture removal, and light non-structural tear-outs." },
  barton: { county: "Washington County", nearby: "West Bend, Kewaskum, Jackson, and Newburg", jobs: "estate and household cleanouts, basement clearing, furniture hauling, and appliance removal." },
  newburg: { county: "Washington County", nearby: "West Bend, Kewaskum, Saukville, and Fredonia", jobs: "house cleanouts, estate contents, garage clearing, yard debris, and bulky-item removal." },
  allenton: { county: "Washington County", nearby: "West Bend, Slinger, Hartford, and Addison", jobs: "estate cleanouts, household junk, furniture and appliance pickups, and small demolition debris loads." },
  erin: { county: "Washington County", nearby: "Hartford, Richfield, Slinger, and Oconomowoc", jobs: "property cleanouts, furniture removal, garage clearing, yard debris, and selected outdoor tear-downs." },
  addison: { county: "Washington County", nearby: "Allenton, Hartford, Slinger, and West Bend", jobs: "house and estate cleanouts, appliance hauling, garage contents, and non-hazardous project debris." },
  mequon: { county: "Ozaukee County", nearby: "Cedarburg, Grafton, Thiensville, and River Hills", jobs: "estate cleanouts, house contents, furniture and appliance removal, and property clearing." },
  grafton: { county: "Ozaukee County", nearby: "Cedarburg, Mequon, Port Washington, and Saukville", jobs: "estate cleanouts, rental turnovers, furniture removal, and garage or basement clearing." },
  cedarburg: { county: "Ozaukee County", nearby: "Grafton, Mequon, Port Washington, and Saukville", jobs: "estate cleanouts, household junk removal, furniture and appliance pickups, and yard debris." },
  "port-washington": { county: "Ozaukee County", nearby: "Cedarburg, Grafton, Mequon, and Saukville", jobs: "house and estate cleanouts, furniture removal, appliance hauling, and property clearing." },
  thiensville: { county: "Ozaukee County", nearby: "Mequon, Cedarburg, Grafton, and River Hills", jobs: "estate cleanouts, apartment and house clearing, furniture removal, and appliance pickups." },
  saukville: { county: "Ozaukee County", nearby: "Port Washington, Grafton, Fredonia, and Newburg", jobs: "house cleanouts, garage and basement clearing, furniture hauling, and yard debris removal." },
  fredonia: { county: "Ozaukee County", nearby: "Saukville, Belgium, Port Washington, and Newburg", jobs: "estate and property cleanouts, appliance removal, furniture hauling, and outdoor debris." },
  belgium: { county: "Ozaukee County", nearby: "Fredonia, Port Washington, Cedar Grove, and Random Lake", jobs: "house cleanouts, estate contents, garage clearing, and furniture or appliance removal." },
  "river-hills": { county: "Ozaukee County", nearby: "Mequon, Thiensville, Cedarburg, and Bayside", jobs: "estate cleanouts, household contents, furniture removal, and selected non-structural tear-outs." },
  "menomonee-falls": { county: "Waukesha County", nearby: "Germantown, Richfield, Brookfield, and Sussex", jobs: "house cleanouts, rental cleanouts, office furniture removal, and renovation debris." },
  pewaukee: { county: "Waukesha County", nearby: "Waukesha, Brookfield, Oconomowoc, and Hartland", jobs: "estate cleanouts, furniture and appliance removal, garage clearing, and general junk hauling." },
  brookfield: { county: "Waukesha County", nearby: "Pewaukee, Waukesha, Menomonee Falls, and Elm Grove", jobs: "house and estate cleanouts, office furniture removal, appliance hauling, and property clearing." },
  waukesha: { county: "Waukesha County", nearby: "Brookfield, Pewaukee, New Berlin, and Oconomowoc", jobs: "house cleanouts, estate contents, rental turnovers, furniture removal, and renovation debris." },
  oconomowoc: { county: "Waukesha County", nearby: "Pewaukee, Hartland, Delafield, and Waukesha", jobs: "estate cleanouts, furniture and appliance removal, garage clearing, and yard debris." },
  hartland: { county: "Waukesha County", nearby: "Oconomowoc, Delafield, Pewaukee, and Waukesha", jobs: "house cleanouts, estate contents, garage and basement clearing, and furniture removal." },
  delafield: { county: "Waukesha County", nearby: "Hartland, Oconomowoc, Pewaukee, and Waukesha", jobs: "estate cleanouts, household junk removal, furniture and appliance pickups, and property clearing." },
  "fond-du-lac": { county: "Fond du Lac County", nearby: "North Fond du Lac, Campbellsport, Lomira, and Oakfield", jobs: "house and estate cleanouts, furniture and appliance removal, garage clearing, and yard debris." },
  campbellsport: { county: "Fond du Lac County", nearby: "Fond du Lac, Lomira, Eden, and Kewaskum", jobs: "estate cleanouts, household junk removal, appliance hauling, and garage or basement clearing." },
  ripon: { county: "Fond du Lac County", nearby: "Rosendale, Brandon, Fond du Lac, and Green Lake", jobs: "estate and house cleanouts, apartment clearing, furniture hauling, and appliance removal." },
  waupun: { county: "Fond du Lac County", nearby: "Fond du Lac, Mayville, Brandon, and Juneau", jobs: "property cleanouts, estate contents, furniture and appliance removal, and renovation debris." },
  mayville: { county: "Dodge County", nearby: "Juneau, Waupun, Lomira, and Horicon", jobs: "house and estate cleanouts, garage clearing, appliance hauling, and yard debris." },
  "north-fond-du-lac": { county: "Fond du Lac County", nearby: "Fond du Lac, Oakfield, Rosendale, and Lomira", jobs: "house cleanouts, rental turnovers, furniture removal, and garage or basement contents." },
  lomira: { county: "Fond du Lac County", nearby: "Fond du Lac, Mayville, Campbellsport, and Brownsville", jobs: "estate cleanouts, household junk, appliance pickups, and non-hazardous project debris." },
  oakfield: { county: "Fond du Lac County", nearby: "Fond du Lac, North Fond du Lac, Lomira, and Waupun", jobs: "property cleanouts, furniture removal, appliance hauling, and garage or basement clearing." },
  rosendale: { county: "Fond du Lac County", nearby: "Fond du Lac, Ripon, Brandon, and North Fond du Lac", jobs: "estate cleanouts, house contents, furniture and appliance removal, and yard debris." },
  brandon: { county: "Fond du Lac County", nearby: "Ripon, Waupun, Rosendale, and Fond du Lac", jobs: "house and estate cleanouts, bulky-item pickups, garage clearing, and property debris." },
  eden: { county: "Fond du Lac County", nearby: "Campbellsport, Fond du Lac, Kewaskum, and Lomira", jobs: "estate contents, household cleanouts, appliance hauling, and outdoor debris removal." },
  brownsville: { county: "Fond du Lac County", nearby: "Lomira, Mayville, Fond du Lac, and Allenton", jobs: "house cleanouts, furniture and appliance pickups, garage clearing, and project debris." },
  watertown: { county: "Dodge County", nearby: "Juneau, Hartford, Oconomowoc, and Waukesha", jobs: "house cleanouts, estate contents, furniture and appliance removal, and renovation debris." },
  juneau: { county: "Dodge County", nearby: "Watertown, Mayville, Waupun, and Hartford", jobs: "estate cleanouts, house clearing, furniture and appliance removal, and general property cleanouts." },
  oostburg: { county: "Sheboygan County", nearby: "Sheboygan, Sheboygan Falls, Cedar Grove, and Random Lake", jobs: "house and estate cleanouts, furniture removal, appliance hauling, and yard debris." },
  sheboygan: { county: "Sheboygan County", nearby: "Sheboygan Falls, Kohler, Oostburg, and Howards Grove", jobs: "house and estate cleanouts, rental turnovers, commercial junk, furniture removal, and appliance hauling." },
  "sheboygan-falls": { county: "Sheboygan County", nearby: "Sheboygan, Kohler, Plymouth, and Howards Grove", jobs: "estate cleanouts, household junk, furniture and appliance pickups, and renovation debris." },
  plymouth: { county: "Sheboygan County", nearby: "Sheboygan Falls, Kohler, Elkhart Lake, and Waldo", jobs: "house and estate cleanouts, garage clearing, furniture hauling, and yard debris." },
  kohler: { county: "Sheboygan County", nearby: "Sheboygan, Sheboygan Falls, Plymouth, and Howards Grove", jobs: "estate and property cleanouts, furniture removal, appliance hauling, and selected interior tear-outs." },
  "elkhart-lake": { county: "Sheboygan County", nearby: "Plymouth, Kiel, Howards Grove, and Sheboygan Falls", jobs: "house cleanouts, estate contents, furniture and appliance removal, and garage clearing." },
  "random-lake": { county: "Sheboygan County", nearby: "Oostburg, Cedar Grove, Belgium, and Fredonia", jobs: "property cleanouts, furniture hauling, appliance pickups, yard debris, and garage contents." },
  "cedar-grove": { county: "Sheboygan County", nearby: "Oostburg, Random Lake, Belgium, and Sheboygan", jobs: "house and estate cleanouts, furniture removal, appliance hauling, and outdoor debris." },
  kiel: { county: "Sheboygan County", nearby: "Elkhart Lake, Plymouth, Howards Grove, and New Holstein", jobs: "estate cleanouts, household junk, garage clearing, and furniture or appliance pickups." },
  "howards-grove": { county: "Sheboygan County", nearby: "Sheboygan, Sheboygan Falls, Plymouth, and Kiel", jobs: "house cleanouts, estate contents, furniture hauling, appliance removal, and project debris." },
  waldo: { county: "Sheboygan County", nearby: "Plymouth, Cascade, Sheboygan Falls, and Campbellsport", jobs: "property cleanouts, garage and basement clearing, furniture removal, and yard debris." },
  cascade: { county: "Sheboygan County", nearby: "Waldo, Plymouth, Campbellsport, and Kewaskum", jobs: "house and estate cleanouts, appliance hauling, furniture removal, and outdoor debris." },
  "new-berlin": { county: "Waukesha County", nearby: "Waukesha, Brookfield, Muskego, and Elm Grove", jobs: "house and estate cleanouts, rental turnovers, furniture removal, and renovation debris." },
  muskego: { county: "Waukesha County", nearby: "New Berlin, Waukesha, Mukwonago, and Brookfield", jobs: "property cleanouts, furniture and appliance removal, garage clearing, and yard debris." },
  mukwonago: { county: "Waukesha County", nearby: "Muskego, Waukesha, Dousman, and Wales", jobs: "house and estate cleanouts, garage contents, appliance hauling, and outdoor tear-down debris." },
  sussex: { county: "Waukesha County", nearby: "Menomonee Falls, Pewaukee, Hartland, and Brookfield", jobs: "estate cleanouts, household junk, furniture and appliance removal, and basement clearing." },
  wales: { county: "Waukesha County", nearby: "Waukesha, Delafield, Dousman, and Pewaukee", jobs: "house cleanouts, estate contents, garage clearing, and furniture or appliance pickups." },
  "elm-grove": { county: "Waukesha County", nearby: "Brookfield, Wauwatosa, New Berlin, and Waukesha", jobs: "estate and house cleanouts, furniture removal, appliance hauling, and selected interior tear-outs." },
  dousman: { county: "Waukesha County", nearby: "Wales, Waukesha, Delafield, and Mukwonago", jobs: "property cleanouts, estate contents, garage clearing, yard debris, and bulky-item removal." },
};

const demolitionScopes = {
  demolition: ["Send wide and close photos of the project, plus approximate dimensions.", "Show gates, stairs, driveways, nearby structures, and the route to the trailer.", "Identify utilities, attachments, and materials so the tear-down and haul-away scope is clear."],
  "shed-removal": ["Empty the shed or show which contents should be included in the quote.", "Photograph every side, the roof, floor, base, and connection to any nearby structure.", "Measure gates and show the loading route so we can review equipment access."],
  "hot-tub-removal": ["Drain the tub and have utilities disconnected by the appropriate professional.", "Show whether the tub sits on a deck, patio, pad, or inside an enclosure.", "Photograph gates, stairs, railings, and the full route from the tub to the truck."],
  "deck-removal": ["Show how the deck connects to the building and whether it is elevated.", "Include stairs, railings, footings, nearby utilities, and approximate dimensions.", "Confirm exactly which deck sections should be removed."],
  "fence-removal": ["Confirm ownership and the sections of fence approved for removal.", "Identify utilities before work and show posts, gates, materials, and the fence line.", "Photograph the route to the loading area and note any limited access."],
  "playset-removal": ["Show the full structure, anchors, slides, swings, and accessory pieces.", "Include gate widths and the route from the backyard to the driveway.", "Tell us whether the playset is still assembled or partly taken apart."],
  "cabinet-removal": ["Empty the cabinets and identify which units and countertops are included.", "Have plumbing, gas, and electrical connections handled by the appropriate professional.", "Show the walls, floors, access route, and any material that must remain undamaged."],
  "flooring-removal": ["Identify the flooring material and approximate room dimensions.", "Show transitions, stairs, subfloor, and the route for carrying debris outside.", "Older material must be assessed before removal when asbestos may be present."],
  "interior-demolition": ["Mark the exact non-structural sections included in the tear-out.", "Have utilities disconnected where the work touches plumbing, gas, or electrical systems.", "Identify materials, access, and what must remain in place before we quote the job."],
  "small-structure-teardowns": ["Photograph every side and provide approximate height, width, and length.", "Show the base, anchors, nearby buildings, overhead lines, gates, and loading route.", "Include any contents that should be removed with the structure."],
  "demolition-debris-removal": ["Show the entire debris pile and identify the project that produced it.", "List the main materials and keep hazardous or unidentified material separate.", "Show where the pile is located and the access available for loading."],
  "construction-debris-removal": ["Show the full debris pile and identify wood, drywall, flooring, cabinets, or fixtures.", "Keep chemicals, wet paint, asbestos, and other hazardous material out of the load.", "Include the pile location and route to the trailer so loading can be scoped."],
};

function esc(value) {
  return String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
}

function cleanPageHref(href) {
  if (!href || /^(?:mailto:|tel:|javascript:|#)/i.test(href)) return href;
  const sameDomain = href.match(/^https:\/\/jgestates\.com\/([^?#]*)([?#].*)?$/i);
  if (sameDomain) {
    const pathPart = sameDomain[1];
    const suffix = sameDomain[2] || "";
    if (!pathPart || pathPart === "index.html") return `https://jgestates.com/${suffix}`;
    if (pathPart.endsWith(".html")) {
      return `https://jgestates.com/${pathPart.slice(0, -5).replace(/\/index$/, "")}/${suffix}`;
    }
    return href;
  }
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//")) return href;
  const match = href.match(/^([^?#]+?)(?:\/index)?\.html([?#].*)?$/i);
  if (match) {
    const suffix = match[2] || "";
    let pagePath = match[1].replace(/^(?:\.\.\/|\.\/)+/, "").replace(/^\/+/, "");
    if (pagePath === "index") return `/${suffix}`;
    pagePath = pagePath.replace(/\/index$/, "");
    return `/${pagePath}/${suffix}`;
  }
  const cleanPath = href.match(/^\/?([^?#]*)([?#].*)?$/);
  if (cleanPath && cleanPath[1] && !cleanPath[1].endsWith("/") && !cleanPath[1].includes(".")) {
    return `/${cleanPath[1].replace(/^\/+/, "")}/${cleanPath[2] || ""}`;
  }
  return href;
}

function normalizeDocumentUrls(html) {
  html = html.replace(/<base href="[^"]*">/, '<base href="/">');
  html = html.replace(/href=(["'])([^"']+)\1/gi, (full, quote, href) => {
    const normalized = cleanPageHref(href)
      .replace(/^\/legal\/privacy-policy\/?$/, "/privacy-policy/")
      .replace(/^\/legal\/terms-and-conditions\/?$/, "/terms-and-conditions/");
    return `href=${quote}${normalized}${quote}`;
  });
  return html;
}

function schemaFor(title, description, url, serviceName) {
  const graph = [
    {
      "@type": "LocalBusiness",
      "@id": "https://jgestates.com/#business",
      name: "JG Estate Services",
      description: "Locally owned junk removal and cleanout company based in West Bend, Wisconsin.",
      url: "https://jgestates.com/",
      telephone: "+1-262-699-0100",
      address: { "@type": "PostalAddress", addressLocality: "West Bend", addressRegion: "WI", addressCountry: "US" },
      areaServed: countyData.map(({ name }) => ({ "@type": "AdministrativeArea", name: `${name}, WI` })),
    },
  ];
  if (serviceName) {
    graph.push({
      "@type": "Service",
      name: serviceName,
      description,
      provider: { "@id": "https://jgestates.com/#business" },
      areaServed: { "@type": "State", name: "Wisconsin" },
      url,
    });
  }
  graph.push({
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: { "@type": "WebSite", name: "JG Estate Services", url: "https://jgestates.com/" },
  });
  graph.push({
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://jgestates.com/" },
      { "@type": "ListItem", position: 2, name: title.replace(" | JG Estate Services", ""), item: url },
    ],
  });
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

function shellHead(title, description, canonical, schema) {
  return `<!doctype html>
<html lang="en-US">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-MB9M6Q8J');</script>
  <!-- End Google Tag Manager -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <base href="./">
  <link rel="icon" href="/assets/images/icon.webp" sizes="32x32">
  <link rel="icon" href="/assets/images/icon.webp" sizes="192x192">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="JG Estate Services">
  <meta property="og:image" content="https://jgestates.com/assets/images/recycle-crop-2.webp">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="https://jgestates.com/assets/images/recycle-crop-2.webp">
  <link rel="stylesheet" href="assets/css/jge-content-expansion.css">
  <script type="application/ld+json">${schema}</script>
</head>`;
}

function header() {
  const menu = navigationMarkup();
  return `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MB9M6Q8J"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<header class="jge-site-header">
  <div class="jge-header-inner">
    <a class="jge-brand" href="/" aria-label="JG Estate Services home">
      <img src="https://jgestates.com/assets/images/a312ab18-de73-4c4c-bccf-325876fccd2b.png" width="286" height="87" alt="JG Estate Services junk removal">
    </a>
    ${menu}
  </div>
</header>`;
}

function navigationMarkup(extraClass = "") {
  return `<nav class="jge-nav ${extraClass}" aria-label="Main navigation">
  <a href="index.html">Home</a>
  <div class="jge-nav-dropdown">
    <a class="jge-nav-trigger" href="service-areas.html">Services <span aria-hidden="true">⌄</span></a>
    <div class="jge-menu-panel jge-menu-panel-services">
      <div>
        <p class="jge-menu-label">Cleanouts</p>
        <a href="estate-cleanouts.html">Estate cleanouts</a>
        <a href="house-cleanouts.html">House cleanouts</a>
        <a href="rental-property-cleanouts.html">Rental property cleanouts</a>
        <a href="hoarder-cleanouts.html">Heavily cluttered properties</a>
      </div>
      <div>
        <p class="jge-menu-label">Spaces &amp; items</p>
        <a href="garage-cleanouts.html">Garage cleanouts</a>
        <a href="basement-cleanouts.html">Basement cleanouts</a>
        <a href="furniture-removal.html">Furniture removal</a>
        <a href="appliance-removal.html">Appliance removal</a>
        <a href="mattress-removal.html">Mattress removal</a>
      </div>
      <div>
        <p class="jge-menu-label">Other hauling</p>
        <a href="yard-debris-removal.html">Yard debris removal</a>
        <a href="commercial-junk-removal.html">Commercial junk removal</a>
        <a href="construction-debris-removal.html">Construction debris</a>
        <a class="jge-menu-view-all" href="service-areas.html">View all services <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </div>
  <div class="jge-nav-dropdown">
    <a class="jge-nav-trigger" href="demolition.html">Demolition <span aria-hidden="true">⌄</span></a>
    <div class="jge-menu-panel jge-menu-panel-demolition">
      <div>
        <p class="jge-menu-label">Light demolition</p>
        <a href="demolition.html">Demolition overview</a>
        <a href="small-structure-teardowns.html">Small structure tear-downs</a>
        <a href="interior-demolition.html">Interior tear-outs</a>
        <a href="demolition-debris-removal.html">Demolition debris removal</a>
      </div>
      <div>
        <p class="jge-menu-label">Outdoor tear-downs</p>
        <a href="shed-removal.html">Shed removal</a>
        <a href="hot-tub-removal.html">Hot tub removal</a>
        <a href="deck-removal.html">Deck removal</a>
        <a href="fence-removal.html">Fence removal</a>
        <a href="playset-removal.html">Playset removal</a>
      </div>
      <div>
        <p class="jge-menu-label">Interior removal</p>
        <a href="cabinet-removal.html">Cabinet removal</a>
        <a href="flooring-removal.html">Flooring removal</a>
        <a href="construction-debris-removal.html">Construction debris</a>
        <p class="jge-menu-note">Selected non-structural work only. Photos and project details are required.</p>
      </div>
    </div>
  </div>
  <div class="jge-nav-dropdown">
    <a class="jge-nav-trigger" href="service-areas.html">Service areas <span aria-hidden="true">⌄</span></a>
    <div class="jge-menu-panel jge-menu-panel-areas">
      <div>
        <p class="jge-menu-label">Counties we serve</p>
        <a href="washington-county.html">Washington County</a>
        <a href="ozaukee-county.html">Ozaukee County</a>
        <a href="dodge-county.html">Dodge County</a>
        <a href="fond-du-lac-county.html">Fond du Lac County</a>
        <a href="sheboygan-county.html">Sheboygan County</a>
        <a href="waukesha-county.html">Waukesha County</a>
      </div>
      <div class="jge-menu-panel-callout">
        <p class="jge-menu-label">Need a local estimate?</p>
        <p>Send photos and the property city to start.</p>
        <a class="jge-menu-view-all" href="service-areas.html">Browse all areas <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </div>
  <a href="pricing.html">Pricing</a>
  <a href="about-us.html">About</a>
  <a href="contact.html">Contact</a>
</nav>
<details class="jge-mobile-menu">
  <summary aria-label="Open site navigation"><span class="jge-mobile-menu-label"><span class="jge-menu-open-text">Menu</span><span class="jge-menu-close-text">Close</span></span><span class="jge-mobile-menu-icon" aria-hidden="true"><i></i><i></i><i></i></span></summary>
  <div class="jge-mobile-panel">
    <div class="jge-mobile-primary">
      <a href="index.html">Home</a>
      <a href="pricing.html">Pricing</a>
      <a href="about-us.html">About</a>
      <a href="contact.html">Contact</a>
    </div>
    <details class="jge-mobile-section">
      <summary>Services <span aria-hidden="true">+</span></summary>
      <div>
        <a href="estate-cleanouts.html">Estate cleanouts</a>
        <a href="house-cleanouts.html">House cleanouts</a>
        <a href="rental-property-cleanouts.html">Rental property cleanouts</a>
        <a href="hoarder-cleanouts.html">Heavily cluttered properties</a>
        <a href="garage-cleanouts.html">Garage cleanouts</a>
        <a href="basement-cleanouts.html">Basement cleanouts</a>
        <a href="furniture-removal.html">Furniture removal</a>
        <a href="appliance-removal.html">Appliance removal</a>
        <a href="mattress-removal.html">Mattress removal</a>
        <a href="yard-debris-removal.html">Yard debris removal</a>
        <a href="commercial-junk-removal.html">Commercial junk removal</a>
        <a href="construction-debris-removal.html">Construction debris</a>
      </div>
    </details>
    <details class="jge-mobile-section">
      <summary>Demolition <span aria-hidden="true">+</span></summary>
      <div>
        <a href="demolition.html">Demolition overview</a>
        <a href="shed-removal.html">Shed removal</a>
        <a href="hot-tub-removal.html">Hot tub removal</a>
        <a href="deck-removal.html">Deck removal</a>
        <a href="fence-removal.html">Fence removal</a>
        <a href="playset-removal.html">Playset removal</a>
        <a href="cabinet-removal.html">Cabinet removal</a>
        <a href="flooring-removal.html">Flooring removal</a>
        <a href="interior-demolition.html">Interior tear-outs</a>
        <a href="small-structure-teardowns.html">Small structure tear-downs</a>
        <a href="demolition-debris-removal.html">Demolition debris removal</a>
      </div>
    </details>
    <details class="jge-mobile-section">
      <summary>Service areas <span aria-hidden="true">+</span></summary>
      <div>
        <a href="service-areas.html">All service areas</a>
        <a href="washington-county.html">Washington County</a>
        <a href="ozaukee-county.html">Ozaukee County</a>
        <a href="dodge-county.html">Dodge County</a>
        <a href="fond-du-lac-county.html">Fond du Lac County</a>
        <a href="sheboygan-county.html">Sheboygan County</a>
        <a href="waukesha-county.html">Waukesha County</a>
      </div>
    </details>
    <a class="jge-mobile-contact" href="contact.html">Request an estimate <span aria-hidden="true">→</span></a>
  </div>
</details>`;
}

function updateHomepageHeader() {
  const filePath = path.join(publicDir, "index.html");
  let html = fs.readFileSync(filePath, "utf8");
  const currentMenu = `<div class="jge-home-navigation">${navigationMarkup()}</div>`;
  const oldMenuStart = html.indexOf('<nav class="jge-nav jge-home-navigation"');
  if (oldMenuStart !== -1) {
    const oldMenuEnd = html.indexOf("</details>", oldMenuStart);
    if (oldMenuEnd !== -1) {
      html = html.slice(0, oldMenuStart) + html.slice(oldMenuEnd + "</details>".length);
    }
  }
  const currentMenuStart = html.indexOf('<div class="jge-home-navigation">');
  if (currentMenuStart !== -1) {
    const currentMenuEnd = html.indexOf("</details></div>", currentMenuStart);
    if (currentMenuEnd !== -1) {
      html = html.slice(0, currentMenuStart) + currentMenu + html.slice(currentMenuEnd + "</details></div>".length);
    }
  } else {
    html = html.replace(
      /(<div class="elementor-element elementor-element-721158f[^>]*>)/,
      `$1${currentMenu}`
    );
  }
  fs.writeFileSync(filePath, html);
}

function replaceLegacyHeader(html) {
  const marker = "<!-- Google Tag Manager (noscript) -->";
  const start = html.indexOf(marker);
  const headerStart = html.indexOf("<header", start);
  const headerEnd = html.indexOf("</header>", headerStart);
  if (start === -1 || headerStart === -1 || headerEnd === -1) return html;
  return html.slice(0, start) + header() + html.slice(headerEnd + "</header>".length);
}

function replaceLegacyPageHero(html, slug) {
  const pages = {
    "about-us": {
      start: '<div class="elementor-element elementor-element-6f8a388',
      end: '<div class="elementor-element elementor-element-d41ad2f',
      breadcrumb: "Local hauling with a practical approach",
      eyebrow: "About JG Estate Services",
      title: "Local hauling with a practical approach",
      lede: "Based in West Bend, JG Estate Services handles junk removal, property cleanouts, and selected light demolition across six southeastern Wisconsin counties.",
      primary: "Request an estimate",
    },
    pricing: {
      start: '<div class="elementor-element elementor-element-517fc79b',
      end: '<section class="jge-pricing-section">',
      breadcrumb: "Volume-based junk removal pricing",
      eyebrow: "Straightforward pricing",
      title: "Volume-based junk removal pricing",
      lede: "Most standard junk removal jobs are priced by the trailer space the material uses. The published tiers provide a clear starting point for common residential and commercial hauling jobs.",
      primary: "Request an estimate",
    },
    contact: {
      start: '<div class="elementor-element elementor-element-af2448b',
      end: '<div class="elementor-element elementor-element-e88bdab',
      breadcrumb: "Tell us what needs to go",
      eyebrow: "Contact JG Estate Services",
      title: "Tell us what needs to go",
      lede: "Send photos, the property city, and any stairs, gates, elevators, or access details. We’ll review the scope and current scheduling options with you.",
      primary: "Start your estimate",
    },
  };
  const page = pages[slug];
  if (!page) return html;
  const hero = `<main class="jge-legacy-page-header">
  <div class="jge-page-shell">
    <nav class="jge-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/about-us/">Company</a><span>/</span><span>${page.breadcrumb}</span></nav>
    <section class="jge-page-hero">
      <div><p class="jge-eyebrow">${page.eyebrow}</p><h1>${page.title}</h1><p class="jge-lede">${page.lede}</p><div class="jge-actions"><a class="jge-button jge-button-primary" href="/contact/#booking">${page.primary} <span aria-hidden="true">↗</span></a><a class="jge-button jge-button-quiet" href="tel:+12626990100">Call 262-699-0100</a></div></div>
    </section>
  </div>
</main>
${"                \n                \n                "}`;
  const existingStart = html.indexOf('<main class="jge-legacy-page-header">');
  if (existingStart !== -1) {
    const existingEnd = html.indexOf("</main>", existingStart);
    if (existingEnd !== -1) {
      const afterMain = existingEnd + "</main>".length;
      const nextContentOffset = html.slice(afterMain).search(/\S/);
      const nextContent = nextContentOffset === -1 ? html.length : afterMain + nextContentOffset;
      return html.slice(0, existingStart) + hero + html.slice(nextContent);
    }
  }
  const start = html.indexOf(page.start);
  const end = html.indexOf(page.end, start);
  if (start === -1 || end === -1) return html;
  return html.slice(0, start) + hero + html.slice(end);
}

function addMobileBookingCta(html) {
  const marker = '<div class="elementor-element elementor-element-40798a6 elementor-widget elementor-widget-html"';
  const cta = `<div class="jge-mobile-booking-cta">
  <p class="jge-card-kicker">Mobile booking</p>
  <h2>Open the booking form in a new window</h2>
  <p>Share your contact details, photos, and job information directly through our Jobber request form.</p>
  <a class="jge-button jge-button-primary" href="${bookingFormUrl}" target="_blank" rel="noopener noreferrer">Open booking form <span aria-hidden="true">↗</span></a>
</div>
                                `;
  if (html.includes('class="jge-mobile-booking-cta"')) {
    return html.replace(/<div class="jge-mobile-booking-cta">.*?<\/div>/s, cta.trim());
  }
  return html.replace(marker, cta + marker);
}

function addBookingIntro(html) {
  const marker = '<div class="jge-mobile-booking-cta">';
  const intro = `<div class="jge-booking-intro">
  <p class="jge-card-kicker">Request an estimate</p>
  <h2>Start your pickup request</h2>
  <p>Use the secure form below to share your contact information, property address, and details about what needs to go.</p>
</div>
                                `;
  if (html.includes('class="jge-booking-intro"')) {
    return html.replace(/<div class="jge-booking-intro">.*?<\/div>/s, intro.trim());
  }
  return html.replace(marker, intro + marker);
}

function rewriteAboutContent(html) {
  const replacements = [
    [
      "JG Estate Services is a locally owned, licensed and insured company based in West Bend, Wisconsin. We handle jobs ranging from one bulky item to complete property and estate cleanouts, plus selected light demolition and haul-away.",
      "We’re a locally owned, licensed and insured company based in West Bend, Wisconsin. We handle jobs ranging from one bulky item to complete property and estate cleanouts, plus selected light demolition and haul-away."
    ],
    ["Meet JG Estate Services", "Locally owned in West Bend"],
    ["Responsible Junk Haulers", "Junk removal, cleanouts, and light demolition"],
    [
      "From curbside pickups to full estate and office cleanouts, JG Estate Services delivers prompt, careful junk removal across SE Wisconsin. We sort every load for reuse and recycling and ensure what remains is disposed of the right way: clean, compliant, and eco-minded.",
      "We’re a locally owned, licensed and insured company based in West Bend, Wisconsin. We handle jobs ranging from one bulky item to complete property and estate cleanouts, plus selected light demolition and haul-away."
    ],
    ["Our Vision\n", "What We Handle\n"],
    [
      "Our vision is to set the standard for junk removal in SE Wisconsin by combining quick turnarounds with respectful, careful crews and eco-smart sorting. We aim to keep our community cleaner by prioritizing reuse, donations, and recycling on every job.",
      "Our work includes individual-item pickups, estate and house cleanouts, rental and commercial cleanouts, and selected non-structural removal projects. We serve Washington, Ozaukee, Dodge, Waukesha, Fond du Lac, and Sheboygan counties."
    ],
    ["Our Mission\n", "How to Get an Estimate\n"],
    ["Fast, reliable junk removal for SE Wisconsin homes and businesses while treating every property with care.", "Send photos of everything that needs to go."],
    ["We put reuse and recycling first to reduce landfill waste and support local nonprofits.", "Include the property city and access details such as stairs, gates, elevators, or a long carry."],
    ["We communicate clearly from estimate to final sweep-up and back it with honest, upfront pricing.", "Many jobs can be estimated from customer photos before scheduling."],
    ["We operate safely and respectfully, keeping your space tidy and our team protected on every job.", "Most standard junk removal jobs are priced by how much trailer space the material uses."],
    ["We make the process simple with easy scheduling, on-time arrivals, and responsible disposal every time.", "For light demolition, show the full project, dimensions, attachments, utilities, and loading access."],
    ["Why Choose Us", "Working With a Local Operator"],
    ["Eco-Friendly Focus", "Local and Direct"],
    [
      "You contact JG Estate Services directly instead of submitting your information to a national lead-generation site.",
      "When you contact us, you deal directly with our local company instead of submitting your information to a national lead-generation site."
    ],
    [
      "We deliver eco-friendly junk removal. Donation-first and recycling-focused to reduce landfill waste and keep usable items in our community.",
      "When you contact us, you deal directly with our local company instead of submitting your information to a national lead-generation site."
    ],
    ["Flexible Scheduling", "Jobs of Different Sizes"],
    [
      "Send photos and the property city so we can review the load, access, and current scheduling options before confirming the job.",
      "We handle everything from individual bulky items to full house, property, and estate cleanouts."
    ],
    ["Transparent Pricing", "Clear Estimates"],
    [
      "Upfront, load-based pricing with clear specialty item fees. Save with curbside pickups. No hidden charges, just honest totals that include labor, hauling, and standard disposal.",
      "Many jobs can be estimated from photos. Standard junk removal is generally priced by trailer volume, while demolition and unusual project scopes are quoted separately."
    ],
  ];
  for (const [from, to] of replacements) html = html.replaceAll(from, to);
  return html;
}

function replaceHomepageMissionSection(html) {
  const section = `<div class="elementor-element elementor-element-718a190 e-flex e-con-boxed e-con e-parent jge-home-services" data-id="718a190" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
    <div class="e-con-inner">
      <div class="jge-home-services-copy">
        <p class="jge-card-kicker">Larger projects</p>
        <h2>More Than Junk Removal</h2>
        <p>Need more than a few items hauled away? We handle complete estate, rental, garage, basement, and property cleanouts, along with selected light demolition projects throughout our service area.</p>
      </div>
      <div class="jge-home-service-grid">
        <a class="jge-home-service-card" href="/estate-cleanouts/"><strong>Estate Cleanouts</strong><span>Clear household contents, furniture, appliances, garage items, and other property contents after a move, sale, or family transition.</span><b aria-hidden="true">↗</b></a>
        <a class="jge-home-service-card" href="/house-cleanouts/"><strong>Property &amp; House Cleanouts</strong><span>Remove contents from a full house or selected rooms before a sale, renovation, move, or property handoff.</span><b aria-hidden="true">↗</b></a>
        <a class="jge-home-service-card" href="/commercial-junk-removal/"><strong>Commercial Junk Removal</strong><span>Clear office furniture, shelving, fixtures, appliances, and general non-hazardous business junk.</span><b aria-hidden="true">↗</b></a>
        <a class="jge-home-service-card" href="/demolition/"><strong>Light Demolition</strong><span>Remove sheds, decks, hot tubs, playsets, cabinets, flooring, and similar selected non-structural projects with haul-away.</span><b aria-hidden="true">↗</b></a>
      </div>
    </div>
  </div>`;
  const pattern = /<div class="elementor-element elementor-element-718a190[\s\S]*?(?=\s*<\/div><!-- \.content -->)/;
  return html.replace(pattern, section);
}

function pricingSection() {
  const tiers = [
    ["Quarter trailer", "$275", "About 25% of the trailer, or roughly 3–4 cubic yards."],
    ["Half trailer", "$425", "About 50% of the trailer, or roughly 7–8 cubic yards."],
    ["Three-quarter trailer", "$575", "About 75% of the trailer, or roughly 10–11 cubic yards."],
    ["Full trailer", "$750", "Up to the trailer’s full capacity, or roughly 14–15 cubic yards."],
  ];
  return `<section class="jge-pricing-section">
  <div class="jge-pricing-intro">
    <p class="jge-card-kicker">Standard junk removal</p>
    <h2>Straightforward volume-based junk removal pricing</h2>
    <p>Most standard junk removal jobs are priced by how much space the material takes up in our trailer. Demolition, unusually heavy material, labor-intensive cleanouts, and special disposal situations may require a separate project quote.</p>
  </div>
  <div class="jge-pricing-tiers">
    ${tiers.map(([name, price, detail]) => `<article class="jge-pricing-tier"><div><h3>${name}</h3><strong>${price}</strong></div><p>${detail}</p></article>`).join("")}
  </div>
  <div class="jge-pricing-details">
    <article class="jge-pricing-card">
      <p class="jge-card-kicker">Included in standard volume pricing</p>
      <h2>No separate TV or Freon-appliance charge</h2>
      <p>Televisions, refrigerators, freezers, and other refrigerant appliances do not currently carry a separate item surcharge. When accepted, they count toward the total trailer volume like other items.</p>
      <p>Send photos of the full load and the property city. We’ll estimate the volume and confirm the quote before loading begins.</p>
    </article>
    <article class="jge-pricing-card jge-pricing-exclusions">
      <p class="jge-card-kicker">Items we do not take</p>
      <h2>Excluded materials and items</h2>
      <ul>
        <li>Hazardous materials or hazardous waste</li>
        <li>Biohazardous, medical, or contaminated material</li>
        <li>Paint, solvents, chemicals, oil, fuel, or similar liquids</li>
        <li>Fluorescent bulbs or tubes</li>
        <li>Asbestos or suspected asbestos-containing material</li>
        <li>Vehicles</li>
      </ul>
      <p>If you are unsure about an item, include it in your photos and ask before scheduling.</p>
    </article>
  </div>
  <div class="jge-pricing-cta">
    <div><p class="jge-card-kicker">Ready for an estimate?</p><h2>Send photos of everything that needs to go.</h2><p>Include the property city and a clear view of the full load so we can estimate the trailer volume.</p></div>
    <a class="jge-button jge-button-primary" href="${bookingPath}">Request a quote <span aria-hidden="true">↗</span></a>
  </div>
</section>`;
}

function replacePricingSection(html) {
  const replacement = pricingSection();
  const currentStart = html.indexOf('<section class="jge-pricing-section">');
  if (currentStart !== -1) {
    const currentEnd = html.indexOf("</section>", currentStart);
    if (currentEnd !== -1) {
      return html.slice(0, currentStart) + replacement + html.slice(currentEnd + "</section>".length);
    }
  }
  const legacyStart = html.indexOf('<div class="elementor-element elementor-element-78db6186');
  const legacyEnd = html.indexOf("</div><!-- .content -->", legacyStart);
  if (legacyStart === -1 || legacyEnd === -1) return html;
  return html.slice(0, legacyStart) + replacement + "\n                " + html.slice(legacyEnd);
}

function footer() {
  return `<footer class="jge-footer">
  <div class="jge-footer-inner">
    <div class="jge-footer-lead">
      <a class="jge-footer-brand" href="index.html" aria-label="JG Estate Services home"><img src="assets/images/a312ab18-de73-4c4c-bccf-325876fccd2b.png" width="286" height="87" alt="JG Estate Services junk removal"></a>
      <p>Junk removal, property cleanouts, and selected light demolition from West Bend across six southeastern Wisconsin counties.</p>
      <div class="jge-footer-contact"><a href="${phoneHref}">${phoneLabel}</a><a href="mailto:contact@jgestates.com">contact@jgestates.com</a></div>
      <a class="jge-footer-estimate" href="${bookingPath}">Request an estimate <span aria-hidden="true">→</span></a>
    </div>
    <nav class="jge-footer-nav" aria-label="Footer navigation">
      <div><strong>Services</strong><a href="estate-cleanouts.html">Estate cleanouts</a><a href="house-cleanouts.html">House cleanouts</a><a href="commercial-junk-removal.html">Commercial junk removal</a><a href="furniture-removal.html">Furniture removal</a><a href="appliance-removal.html">Appliance removal</a></div>
      <div><strong>Demolition</strong><a href="demolition.html">Demolition overview</a><a href="shed-removal.html">Shed removal</a><a href="hot-tub-removal.html">Hot tub removal</a><a href="interior-demolition.html">Interior tear-outs</a><a href="demolition-debris-removal.html">Debris removal</a></div>
      <div><strong>Service areas</strong><a href="service-areas.html">All service areas</a><a href="washington-county.html">Washington County</a><a href="ozaukee-county.html">Ozaukee County</a><a href="dodge-county.html">Dodge County</a><a href="fond-du-lac-county.html">Fond du Lac County</a><a href="sheboygan-county.html">Sheboygan County</a><a href="waukesha-county.html">Waukesha County</a></div>
      <div><strong>Company</strong><a href="pricing.html">Pricing</a><a href="about-us.html">About</a><a href="faq.html">FAQ</a><a href="contact.html">Contact</a></div>
    </nav>
  </div>
  <div class="jge-footer-bottom"><span>© JG Estate Services · Locally owned in West Bend, Wisconsin</span><span><a href="privacy-policy.html">Privacy policy</a><a href="terms-and-conditions.html">Terms and conditions</a></span></div>
</footer>`;
}

function replaceSharedFooter(html) {
  const footerStart = html.lastIndexOf("<footer");
  if (footerStart === -1) return html;
  const footerEnd = html.indexOf("</footer>", footerStart);
  if (footerEnd === -1) return html;
  return html.slice(0, footerStart) + footer() + html.slice(footerEnd + "</footer>".length);
}

function relatedLinks(links) {
  return links.map(([label, href]) => `<a class="jge-related-link" href="${href}"><span>${esc(label)}</span><span aria-hidden="true">↗</span></a>`).join("");
}

function servicePage(data) {
  const canonical = `https://jgestates.com/${data.slug}/`;
  const scope = demolitionScopes[data.slug];
  const scopeSection = scope ? `<section class="jge-scope-section">
      <div class="jge-section-heading"><p class="jge-card-kicker">Request an estimate</p><h2>Three details that help us price the work</h2><p>Photos, dimensions, and access details give us a useful first look at the project and the material that will need to be hauled away.</p></div>
      <div class="jge-scope-grid">${scope.map((item, index) => `<article><span>0${index + 1}</span><p>${esc(item)}</p></article>`).join("")}</div>
    </section>` : "";
  return `${shellHead(data.title, data.description, canonical, schemaFor(data.title, data.description, canonical, data.heading))}
<body class="jge-expansion-body">
${header()}
<main>
  <div class="jge-page-shell">
    <nav class="jge-breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="service-areas.html">Services</a><span>/</span><span>${esc(data.heading)}</span></nav>
    <section class="jge-page-hero">
      <div><p class="jge-eyebrow">${esc(data.eyebrow)}</p><h1>${esc(data.heading)}</h1><p class="jge-lede">${esc(data.intro)}</p><div class="jge-actions"><a class="jge-button jge-button-primary" href="${bookingPath}">Request a quote <span aria-hidden="true">↗</span></a><a class="jge-button jge-button-quiet" href="${phoneHref}">Call ${phoneLabel}</a></div></div>
    </section>
    <section class="jge-content-grid">
      <article class="jge-content-card"><p class="jge-card-kicker">The short version</p><h2>${esc(data.detailHeading)}</h2><p>${esc(data.detail)}</p><ul class="jge-check-list">${data.items.map((item) => `<li><span aria-hidden="true">✓</span>${esc(item)}</li>`).join("")}</ul></article>
      <aside class="jge-note-card"><p class="jge-card-kicker">Good to know</p><h2>${esc(data.noteHeading)}</h2><p>${esc(data.note)}</p><a class="jge-text-link" href="faq.html">Read common questions <span aria-hidden="true">→</span></a></aside>
    </section>
    ${scopeSection}
    <section class="jge-related"><div><p class="jge-card-kicker">Keep exploring</p><h2>Related services and areas</h2></div><div class="jge-related-list">${relatedLinks(data.related)}</div></section>
    <section class="jge-bottom-cta"><div><p class="jge-card-kicker">Have photos?</p><h2>Send the details and we’ll review the job.</h2><p>Photos, the city, and a quick note about access are the fastest way to start a useful conversation.</p></div><a class="jge-button jge-button-light" href="${bookingPath}">Get a quote <span aria-hidden="true">↗</span></a></section>
  </div>
</main>
${footer()}
</body>
</html>`;
}

function serviceAreasPage() {
  const title = "Junk Removal Service Areas in SE Wisconsin | JG Estate Services";
  const description = "JG Estate Services provides junk removal, property cleanouts, and selected light demolition across six SE Wisconsin counties from West Bend.";
  const canonical = "https://jgestates.com/service-areas/";
  const countyLinks = countyData.map(({ name, slug }) => `<a class="jge-related-link" href="${slug}.html"><span>${esc(name)}</span><span aria-hidden="true">↗</span></a>`).join("");
  const serviceLinks = [
    ["Estate cleanouts", "estate-cleanouts.html"],
    ["House cleanouts", "house-cleanouts.html"],
    ["Rental property cleanouts", "rental-property-cleanouts.html"],
    ["Furniture removal", "furniture-removal.html"],
    ["Appliance removal", "appliance-removal.html"],
    ["Construction debris", "construction-debris-removal.html"],
    ["Light demolition", "demolition.html"],
    ["Small structure tear-downs", "small-structure-teardowns.html"],
    ["Demolition debris removal", "demolition-debris-removal.html"],
    ["Commercial junk removal", "commercial-junk-removal.html"],
  ];
  return `${shellHead(title, description, canonical, schemaFor(title, description, canonical, "Junk removal and property cleanouts in SE Wisconsin"))}
<body class="jge-expansion-body">
${header()}
<main>
  <div class="jge-page-shell">
    <nav class="jge-breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>Service areas</span></nav>
    <section class="jge-page-hero">
      <div><p class="jge-eyebrow">Six-county coverage</p><h1>Junk removal across SE Wisconsin</h1><p class="jge-lede">JG Estate Services is based in West Bend and serves Washington, Ozaukee, Dodge, Fond du Lac, Sheboygan, and Waukesha counties. We handle single-item pickups, full property cleanouts, and selected light demolition.</p><div class="jge-actions"><a class="jge-button jge-button-primary" href="${bookingPath}">Request a quote <span aria-hidden="true">↗</span></a><a class="jge-button jge-button-quiet" href="${phoneHref}">Call ${phoneLabel}</a></div></div>
    </section>
    <section class="jge-related">
      <div><p class="jge-card-kicker">County pages</p><h2>Choose your service area</h2><p>Each county page lists the cities covered and links to useful local service information.</p></div>
      <div class="jge-related-list">${countyLinks}</div>
    </section>
    <section class="jge-content-grid">
      <article class="jge-content-card"><p class="jge-card-kicker">Available services</p><h2>What we can haul or clear</h2><p>Our work ranges from one bulky item to an estate, house, rental, garage, basement, or commercial cleanout. We also remove common renovation debris and perform selected non-structural tear-outs.</p><div class="jge-related-list jge-service-area-links">${relatedLinks(serviceLinks)}</div></article>
      <aside class="jge-note-card"><p class="jge-card-kicker">Estimate details</p><h2>Start with photos and the property city</h2><p>Pricing is primarily based on the volume of material. Include stairs, gates, elevators, long carries, or disassembly needs so we can understand the job before scheduling.</p><a class="jge-text-link" href="pricing.html">See how pricing works <span aria-hidden="true">→</span></a></aside>
    </section>
    <section class="jge-bottom-cta"><div><p class="jge-card-kicker">Not sure where to start?</p><h2>Show us what needs to go.</h2><p>Send photos, the property location, and a short description. We’ll confirm whether the material and location are within our service scope.</p></div><a class="jge-button jge-button-light" href="${bookingPath}">Get a quote <span aria-hidden="true">↗</span></a></section>
  </div>
</main>
${footer()}
</body>
</html>`;
}

function countyPage(data) {
  const canonical = `https://jgestates.com/${data.slug}/`;
  const cityLinks = data.cities.map(([name, slug]) => `<a href="${slug}.html">${esc(name)}<span aria-hidden="true">↗</span></a>`).join("");
  const descriptions = {
    "Washington County": "JG Estate Services is based in West Bend and serves homeowners, families, landlords, property managers, and businesses across Washington County.",
    "Ozaukee County": "We provide junk removal and cleanout service throughout Ozaukee County, including Cedarburg, Grafton, Mequon, Port Washington, and nearby communities.",
    "Dodge County": "JG Estate Services serves Dodge County for household junk removal, property cleanouts, furniture and appliance hauling, and selected light demolition.",
    "Fond du Lac County": "We provide junk removal and cleanout service across Fond du Lac County, including Fond du Lac, Campbellsport, Lomira, Oakfield, and nearby communities.",
    "Sheboygan County": "We serve Sheboygan County with household cleanouts, furniture and appliance removal, yard debris hauling, and selected light demolition.",
    "Waukesha County": "We provide junk removal and property cleanouts throughout Waukesha County, including Waukesha, Brookfield, Pewaukee, Oconomowoc, and nearby communities.",
  };
  const description = descriptions[data.name];
  return `${shellHead(`Junk Removal in ${data.name} | JG Estate Services`, description, canonical, schemaFor(`Junk Removal in ${data.name}`, description, canonical, `Junk removal in ${data.name}`))}
<body class="jge-expansion-body">
${header()}
<main>
  <div class="jge-page-shell">
    <nav class="jge-breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="service-areas.html">Service areas</a><span>/</span><span>${esc(data.name)}</span></nav>
    <section class="jge-page-hero jge-location-hero jge-county-hero"><div><p class="jge-eyebrow">Service area</p><h1>Junk removal in ${esc(data.name)}</h1><p class="jge-lede">${esc(description)} Many jobs can be scoped from photos before scheduling.</p><div class="jge-actions"><a class="jge-button jge-button-primary" href="${bookingPath}">Request a quote <span aria-hidden="true">↗</span></a><a class="jge-button jge-button-quiet" href="tel:+12626990100">Call ${phoneLabel}</a></div></div></section>
    <section class="jge-content-grid"><article class="jge-content-card"><p class="jge-card-kicker">What we handle</p><h2>Practical hauling for homes and properties</h2><p>Common requests include estate and house cleanouts, garage and basement clearing, furniture and appliance removal, yard debris, construction debris, and selected light demolition.</p><ul class="jge-check-list"><li><span aria-hidden="true">✓</span>Single-item pickups or full property cleanouts</li><li><span aria-hidden="true">✓</span>Volume-based estimates, often from customer photos</li><li><span aria-hidden="true">✓</span>We load the material ourselves</li><li><span aria-hidden="true">✓</span>Donation and recycling sorting when practical</li></ul></article><aside class="jge-note-card"><p class="jge-card-kicker">Before you reach out</p><h2>Include the city and access details</h2><p>Photos of the items, the property, stairs or gates, and the route to the truck help us understand the job. We confirm the scope before loading begins.</p><a class="jge-text-link" href="pricing.html">See how volume-based pricing works <span aria-hidden="true">→</span></a></aside></section>
    <section class="jge-city-section"><div><p class="jge-card-kicker">Local coverage</p><h2>Cities we serve in ${esc(data.name)}</h2><p>Choose a city for a more specific service overview.</p></div><div class="jge-city-list">${cityLinks}</div></section>
    <section class="jge-bottom-cta"><div><p class="jge-card-kicker">Need a local estimate?</p><h2>Tell us what needs to go.</h2><p>JG Estate Services is based in West Bend and serves all six counties listed on this site.</p></div><a class="jge-button jge-button-light" href="${bookingPath}">Contact JG Estate Services <span aria-hidden="true">↗</span></a></section>
  </div>
</main>
${footer()}
</body>
</html>`;
}

function locationPage(slug, data) {
  const name = slug.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ");
  const canonical = `https://jgestates.com/${slug}/`;
  const description = `Junk removal and property cleanouts in ${name}, WI. JG Estate Services handles ${data.jobs} Photo estimates and volume-based pricing are available.`;
  const countySlug = data.county.toLowerCase().replace(/ county$/, "").replace(/ /g, "-") + "-county";
  return `${shellHead(`Junk Removal in ${name}, WI | JG Estate Services`, description, canonical, schemaFor(`Junk Removal in ${name}, WI`, description, canonical, `Junk removal in ${name}, Wisconsin`))}
<body class="jge-expansion-body">
${header()}
<main>
  <div class="jge-page-shell">
    <nav class="jge-breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="service-areas.html">Service areas</a><span>/</span><a href="${countySlug}.html">${esc(data.county)}</a><span>/</span><span>${esc(name)}</span></nav>
    <section class="jge-page-hero jge-location-hero"><div><p class="jge-eyebrow">${esc(data.county)}</p><h1>Junk removal in ${esc(name)}, WI</h1><p class="jge-lede">JG Estate Services serves ${esc(name)} for ${esc(data.jobs)} We’re based in West Bend, and many jobs can be scoped from photos before scheduling.</p><div class="jge-actions"><a class="jge-button jge-button-primary" href="${bookingPath}">Request a quote <span aria-hidden="true">↗</span></a><a class="jge-button jge-button-quiet" href="${phoneHref}">Call ${phoneLabel}</a></div></div></section>
    <section class="jge-content-grid"><article class="jge-content-card"><p class="jge-card-kicker">Jobs we can discuss</p><h2>From one item to a full property cleanout</h2><p>Our work in ${esc(name)} can include estate and house cleanouts, garage and basement clearing, furniture and appliance removal, yard debris, construction debris, and selected light demolition.</p><ul class="jge-check-list"><li><span aria-hidden="true">✓</span>Send photos for a useful first estimate</li><li><span aria-hidden="true">✓</span>Pricing is primarily based on load volume</li><li><span aria-hidden="true">✓</span>We load and haul the material ourselves</li><li><span aria-hidden="true">✓</span>Usable items are separated for donation when practical</li></ul></article><aside class="jge-note-card"><p class="jge-card-kicker">Nearby coverage</p><h2>${esc(name)} and nearby communities</h2><p>We also serve ${esc(data.nearby)}. Share the property city, item photos, and any stairs, gates, or access limits when you contact us.</p><a class="jge-text-link" href="${countySlug}.html">View ${esc(data.county)} service area <span aria-hidden="true">→</span></a></aside></section>
    <section class="jge-related"><div><p class="jge-card-kicker">Useful next steps</p><h2>Services people request locally</h2></div><div class="jge-related-list">${relatedLinks([["Estate cleanouts", "estate-cleanouts.html"], ["Furniture removal", "furniture-removal.html"], ["Appliance removal", "appliance-removal.html"], ["Light demolition", "demolition.html"], ["Service areas", "service-areas.html"]])}</div></section>
    <section class="jge-bottom-cta"><div><p class="jge-card-kicker">Ready to clear the space?</p><h2>Send a few photos of the job.</h2><p>A photo, the city, and access information give us a better starting point than a generic description.</p></div><a class="jge-button jge-button-light" href="${bookingPath}">Get a quote <span aria-hidden="true">↗</span></a></section>
  </div>
</main>
${footer()}
</body>
</html>`;
}

function writePage(slug, html) {
  fs.mkdirSync(path.join(publicDir, slug), { recursive: true });
  fs.writeFileSync(path.join(publicDir, slug, "index.html"), normalizeDocumentUrls(html));
}

function updateAppRoutes(slugs) {
  const appPath = path.join(root, "src", "App.tsx");
  let app = fs.readFileSync(appPath, "utf8");
  app = app.replaceAll('"home.html"', '"index.html"');
  const marker = '      "/dousman/": "dousman.html",';
  const additions = slugs.filter((slug) => !app.includes(`"/${slug}"`)).flatMap((slug) => [`      "/${slug}": "${slug}.html",`, `      "/${slug}/": "${slug}.html",`]).join("\n");
  if (additions) app = app.replace(marker, `${marker}\n${additions}`);
  fs.writeFileSync(appPath, app);
}

function updateRedirects(slugs) {
  const redirectPath = path.join(publicDir, "_redirects");
  const redirects = [...new Set(slugs)].sort().flatMap((slug) => [
    `/${slug} /${slug}/ 301`,
    `/${slug}.html /${slug}/ 301`,
    `/${slug}/index.html /${slug}/ 301`,
  ]).join("\n") + "\n";
  fs.writeFileSync(redirectPath, redirects);
}

function getPageSlugs() {
  return fs.readdirSync(publicDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(publicDir, entry.name, "index.html")))
    .map((entry) => entry.name);
}

function removeDuplicateFlatPages() {
  for (const entry of fs.readdirSync(publicDir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".html") || entry.name === "index.html") continue;
    const slug = entry.name.slice(0, -5);
    if (fs.existsSync(path.join(publicDir, slug, "index.html"))) {
      fs.unlinkSync(path.join(publicDir, entry.name));
    }
  }
}

function updateSitemap(slugs) {
  const sitemapPath = path.join(publicDir, "sitemap.xml");
  let sitemap = fs.readFileSync(sitemapPath, "utf8");
  const additions = slugs.filter((slug) => !sitemap.includes(`https://jgestates.com/${slug}/`)).map((slug) => `  <url><loc>https://jgestates.com/${slug}/</loc></url>`).join("\n");
  if (additions) sitemap = sitemap.replace("</urlset>", `${additions}\n</urlset>`);
  fs.writeFileSync(sitemapPath, sitemap);
}

function updateExistingPages() {
  const entries = fs.readdirSync(publicDir, { withFileTypes: true });
  const htmlFiles = [
    ...entries.filter((entry) => entry.isFile() && entry.name.endsWith(".html")).map((entry) => path.join(publicDir, entry.name)),
    ...entries.filter((entry) => entry.isDirectory() && fs.existsSync(path.join(publicDir, entry.name, "index.html"))).map((entry) => path.join(publicDir, entry.name, "index.html")),
  ];
  for (const filePath of htmlFiles) {
    let html = fs.readFileSync(filePath, "utf8");
    const relativePath = path.relative(publicDir, filePath).split(path.sep).join("/");
    const isLegacyPage = /^(pricing|about-us|faq|contact)(\.html|\/index\.html)$/.test(relativePath);
    if (isLegacyPage) {
      html = replaceLegacyHeader(html);
      if (!html.includes('href="assets/css/jge-content-expansion.css"')) {
        html = html.replace("</head>", '<link rel="stylesheet" href="assets/css/jge-content-expansion.css">\n</head>');
      }
      const legacySlug = relativePath.split("/")[0].replace(/\.html$/, "");
      html = replaceLegacyPageHero(html, legacySlug);
      if (legacySlug === "about-us") html = rewriteAboutContent(html);
      if (legacySlug === "contact") {
        html = addMobileBookingCta(html);
        html = addBookingIntro(html);
      }
      if (/^pricing(\.html|\/index\.html)$/.test(relativePath)) {
        html = replacePricingSection(html);
        html = html.replaceAll("Junk Removal Pricing Guide", "Volume-Based Junk Removal Pricing");
        html = html.replace("Simple up front pricing makes things easier.", "One volume-based pricing system for residential and commercial jobs.");
      }
    }
    html = html.replace(
      "assets/images/WhiteCircle.png",
      "assets/images/a312ab18-de73-4c4c-bccf-325876fccd2b.png"
    );
    html = html.replace(/five counties/gi, "six counties");
    html = html.replace(/five counties/gi, "six counties");
    html = html.replace(/Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties/gi, "Washington, Ozaukee, Dodge, Fond du Lac, Sheboygan, and Waukesha counties");
    html = html.replace(/Washington, Ozaukee, Waukesha, and Dodge counties \(nearby areas by request\)/gi, "Washington, Ozaukee, Dodge, Fond du Lac, Sheboygan, and Waukesha counties");
    html = html.replace(
      /JG Estate Services provides quick, professional junk removal across SE Wisconsin\. From single-item pickups to full cleanouts, we offer same-week service for residential and commercial jobs\. We prioritize donation and recycling and handle disposal the right way, so your space is cleared quickly and responsibly\./g,
      "JG Estate Services is a locally owned hauling company based in West Bend. We handle individual-item pickups, full property cleanouts, and selected light demolition across six SE Wisconsin counties."
    );
    html = html.replace(
      /Serving SE Wisconsin with same-week availability\./gi,
      "Serving six SE Wisconsin counties from West Bend."
    );
    html = html.replace(
      /<li><strong>Same-week availability<\/strong> — 7 days a week, we work around your schedule<\/li>/gi,
      "<li><strong>Scheduling based on current availability</strong> — send photos and the property city so we can review the job</li>"
    );
    html = html.replace(
      /Book same-week or next-day pickups, with evening or weekend options, quick text updates, and reliable arrival windows that fit your schedule\./gi,
      "Send photos and the property city so we can review the load, access, and current scheduling options before confirming the job."
    );
    html = html.replace(
      /From a single couch to a full estate cleanout — we haul it all across Washington, Ozaukee, Sheboygan, Fond du Lac, and Waukesha counties\. Same-week scheduling available\./gi,
      "From one bulky item to a full property cleanout, JG Estate Services handles the loading and hauling. Send photos and the property city for a volume-based estimate across six southeastern Wisconsin counties."
    );
    html = html.replace(/SE Locally Owned in West Bend/gi, "SE Wisconsin's Trusted Junk Removal");
    html = html.replace(/Quick, Affordable<br>Junk Removal<br><em>Starts Here<\/em>/gi, "Junk Removal &amp;<br>Property Cleanouts");
    html = html.replace(/Same-Week Pickup/gi, "Photo Estimates");
    html = html.replace(
      /Most jobs are scheduled same-week, often next-day\./gi,
      "Scheduling depends on the job scope, location, and current availability. Send photos and the property city to get started."
    );
    html = html.replace(
      /<p>Life happens! Just give us a heads-up as soon as you can\. Same-day cancellations may incur a fee if the crew is already en route\.<\/p>/g,
      "<p>Contact us as soon as possible if plans change. We’ll confirm any scheduling details that apply to your job.</p>"
    );
    html = html.replace(
      /<p>No prep required, but grouping items together speeds things up\. Staging in the garage\/driveway qualifies for the curbside discount\.<\/p>/g,
      "<p>Group or clearly mark the items that should go. Staging them near the garage or driveway can make loading more direct, but it is not required.</p>"
    );
    html = html.replace(
      /Do you offer a curbside discount\?/g,
      "Does staging items outside change the pickup?"
    );
    html = html.replace(
      /<p>Yes, if items are staged in the garage\/driveway or at the curb, you’ll save compared to full in-home removal\.<\/p>/g,
      "<p>Staging items near the garage, driveway, or curb can simplify access. Send a photo of the staged load so it can be considered when the quote is prepared.</p>"
    );
    html = html.replace(
      /<p>Cash, check, credit\/debit or Venmo are all accepted\.<\/p>/g,
      "<p>Confirm the currently accepted payment methods when your job is scheduled.</p>"
    );
    html = html.replace(
      /<p>Yes, there’s a small minimum to cover travel, labor, and disposal\. Send a photo and we’ll confirm if your job falls under it\.<\/p>/g,
      "<p>Send a photo and the property city. Your quote will state the total for the job before loading begins.</p>"
    );
    html = html.replace(
      /<p>Yes, donation and recycling come first\. We sort on every job to keep usable items in the community and reduce landfill waste\. Donation receipts available when provided by partners\.<\/p>/g,
      "<p>Usable items may be separated for donation or recycling when appropriate. Acceptance depends on item condition and the receiving facility.</p>"
    );
    html = html.replace(
      /<p>Yes, some items carry recycling\/handling fees due to local regulations\. We’ll list them clearly in your quote\.<\/p>/g,
      "<p>We can review TVs, appliances, and mattresses. Item type and disposal requirements are considered when the quote is prepared.</p>"
    );
    html = html.replace(
      /<p>Yes, drywall, wood, cabinets, flooring, etc\. Heavier loads are priced accordingly due to weight\/disposal fees\.<\/p>/g,
      '<p>We remove common non-hazardous project debris such as wood, drywall, cabinets, and flooring. See our <a href="construction-debris-removal.html">construction debris</a> and <a href="demolition-debris-removal.html">demolition debris</a> pages for scope details.</p>'
    );
    html = html.replace(
      /<p>We offer light demolition and breakdown for an added fee\. Send photos and we’ll confirm scope and pricing\.<\/p>/g,
      '<p>We perform selected light, non-structural tear-outs, including sheds, playsets, hot tubs, decks, fences, cabinets, and flooring. Visit the <a href="demolition.html">light demolition overview</a>, then send photos so we can confirm the scope.</p>'
    );
    html = html.replace(
      /<p>Yes, sensitive, full-service cleanouts with sorting for donation\/recycling and coordinated scheduling\.<\/p>/g,
      '<p>We handle estate, rental-property, and heavily cluttered home cleanouts. Review our <a href="estate-cleanouts.html">estate cleanout</a> or <a href="hoarder-cleanouts.html">heavily cluttered property</a> page, then send photos and access details.</p>'
    );
    html = html.replace(
      /<p>JG Estate Services operates out of West Bend, WI<br \/>Call or Text 262-699-0100<br \/>Monday &#8211; Saturday 8:00AM &#8211; 6:00PM<\/p>/g,
      "<p>JG Estate Services operates out of West Bend, WI<br />Call or Text 262-699-0100</p>"
    );
    const isFaq = filePath === path.join(publicDir, "faq.html") || filePath.endsWith(`${path.sep}faq${path.sep}index.html`);
    if (isFaq && !html.includes('id="jge-faq-schema"')) {
      const faqSchema = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What areas do you serve?", acceptedAnswer: { "@type": "Answer", text: "JG Estate Services serves Washington, Ozaukee, Dodge, Waukesha, Fond du Lac, and Sheboygan counties in Wisconsin." } },
          { "@type": "Question", name: "Can you estimate a job from photos?", acceptedAnswer: { "@type": "Answer", text: "Many jobs can be estimated from customer photos. Include the property city, the full load, and access details such as stairs, gates, or elevators." } },
          { "@type": "Question", name: "How does pricing work?", acceptedAnswer: { "@type": "Answer", text: "Pricing is primarily based on the volume of material. The quote is confirmed before loading begins." } },
          { "@type": "Question", name: "Do you offer light demolition?", acceptedAnswer: { "@type": "Answer", text: "JG Estate Services performs selected non-structural tear-outs, including sheds, playsets, hot tubs, decks, fences, cabinets, and flooring. Structural demolition, excavation, asbestos work, and hazardous-material work are not offered." } },
          { "@type": "Question", name: "What items can’t you take?", acceptedAnswer: { "@type": "Answer", text: "JG Estate Services does not take hazardous materials such as wet paint, chemicals, solvents, oils, gas, asbestos, or biohazards." } },
        ],
      });
      html = html.replace("</head>", `<script id="jge-faq-schema" type="application/ld+json">${faqSchema}</script>\n</head>`);
    }
    if (filePath === path.join(publicDir, "index.html")) {
      html = replaceHomepageMissionSection(html);
      html = html.replace(/<script type="application\/ld\+json">.*?<\/script>/s, `<script type="application/ld+json">${schemaFor("JG Estate Services", "Locally owned junk removal and estate cleanouts based in West Bend, Wisconsin.", "https://jgestates.com/", "Junk removal and estate cleanouts")}</script>`);
      html = html.replace(/<meta property="og:title" content="[^"]*"/, '<meta property="og:title" content="Junk Removal and Cleanouts in SE Wisconsin | JG Estate Services"');
      html = html.replace(/<meta name="twitter:title" content="[^"]*"/, '<meta name="twitter:title" content="Junk Removal and Cleanouts in SE Wisconsin | JG Estate Services"');
    }
    html = html.replace(/\s*<!-- start top-to-bottom\s*-->\s*<div[^>]*id="top-to-bottom"[^>]*>.*?<\/div>/s, "");
    html = replaceSharedFooter(html);
    fs.writeFileSync(filePath, normalizeDocumentUrls(html));
  }
}

function updateHomepageProcessSection() {
  const filePath = path.join(publicDir, "index.html");
  let html = fs.readFileSync(filePath, "utf8");
  if (!html.includes('jge-process-section')) {
    html = html.replace(
      'class="elementor-element elementor-element-2bfc58b e-flex e-con-boxed e-con e-parent"',
      'class="elementor-element elementor-element-2bfc58b e-flex e-con-boxed e-con e-parent jge-process-section"'
    );
    html = html.replace(
      'class="elementor-element elementor-element-ab574d5 e-con-full e-flex e-con e-child"',
      'class="elementor-element elementor-element-ab574d5 e-con-full e-flex e-con e-child jge-process-heading"'
    );
    html = html.replace(
      'class="elementor-element elementor-element-caa3a0a e-con-full e-flex e-con e-child"',
      'class="elementor-element elementor-element-caa3a0a e-con-full e-flex e-con e-child jge-process-intro"'
    );
    html = html.replace(
      'class="elementor-element elementor-element-7b751e2 e-con-full e-flex e-con e-child"',
      'class="elementor-element elementor-element-7b751e2 e-con-full e-flex e-con e-child jge-process-content"'
    );
    html = html.replace(
      'class="elementor-element elementor-element-be97208 e-con-full e-flex e-con e-child"',
      'class="elementor-element elementor-element-be97208 e-con-full e-flex e-con e-child jge-process-media"'
    );
    html = html.replace(
      'class="elementor-element elementor-element-f37c0a6 e-grid e-con-full e-con e-child"',
      'class="elementor-element elementor-element-f37c0a6 e-grid e-con-full e-con e-child jge-process-steps"'
    );
    for (const id of ["0e3a6fe", "8349802", "f777971", "94cc6f3"]) {
      html = html.replace(
        `class="elementor-element elementor-element-${id} elementor-position-top`,
        `class="elementor-element elementor-element-${id} elementor-position-top jge-process-step`
      );
    }
    html = html.replace(
      "We are ready to handle your junk removal and light demo needs in an eco-friendly and responsible manner. Read below to learn how our junk removal process works.",
      "A straightforward process from the first message to the final load. We handle the lifting, hauling, and sorting so you know what happens next."
    );
    html = html.replace(
      "Reach out to us via phone, text, email or social media to get on our schedule",
      "Call, text, or email us with the items, property city, and a few photos when possible."
    );
    html = html.replace(
      "We will come collect your items inside your residence, business or curbside.",
      "We collect from inside the home or business, from a garage, or from the curb."
    );
    html = html.replace(
      "After your items are collected we assess the load. Anything that can be donated will be and the rest is disposed of.",
      "After loading, we sort the material and separate items that may be suitable for donation or recycling."
    );
    html = html.replace(
      "After anything that can be donated has been removed, loads are taken to recycling centers, transfer stations or landfills.",
      "The remaining material goes to the appropriate recycling, transfer, or disposal facility."
    );
    html = html.replace(
      'alt="Junk removal professionals"',
      'alt="JG Estate Services owner loading a customer item"'
    );
  }
  if (!html.includes('href="assets/css/jge-content-expansion.css"')) {
    html = html.replace("</head>", '<link rel="stylesheet" href="assets/css/jge-content-expansion.css">\n</head>');
  }
  fs.writeFileSync(filePath, html);
}

fs.mkdirSync(assetsCss, { recursive: true });
for (const data of services) writePage(data.slug, servicePage(data));
writePage("service-areas", serviceAreasPage());
for (const data of countyData) writePage(data.slug, countyPage(data));
for (const [slug, data] of Object.entries(priorityCities)) writePage(slug, locationPage(slug, data));
updateAppRoutes([...services.map((item) => item.slug), ...countyData.map((item) => item.slug), ...Object.keys(priorityCities)]);
updateSitemap([...services.map((item) => item.slug), ...countyData.map((item) => item.slug), ...Object.keys(priorityCities)]);
updateExistingPages();
updateHomepageProcessSection();
updateHomepageHeader();
updateExistingPages();
const allPageSlugs = getPageSlugs();
updateRedirects(allPageSlugs);
removeDuplicateFlatPages();