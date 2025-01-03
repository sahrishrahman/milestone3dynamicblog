import { Blog } from "@/types/blog";

 const beautyBlogs: Blog[] = [
    {
      id: "1",
      title: "5 Skincare Routines for Glowing Skin",
      image: "/skin-care.png",
      description: "Discover the best skincare routines for a radiant, glowing complexion.",
      content: `
        Glowing skin is the result of consistent care, tailored routines, and the right products. Begin with cleansing, the foundation of any skincare regime. Use a gentle cleanser that suits your skin type to remove makeup, dirt, and oils. If you wear heavy makeup, double cleansing is a game-changer. Start with an oil-based cleanser to break down stubborn layers, followed by a water-based cleanser for deep purification. This ensures your skin is thoroughly prepped for the next steps.
  
        Exfoliation is a crucial step to achieving radiant skin. Regular use of AHAs (like glycolic acid) or BHAs (like salicylic acid) helps to remove dead skin cells, unclog pores, and encourage cell turnover. This process reveals fresher, brighter skin and prevents dullness. Over-exfoliation can harm your skin barrier, so limit this step to 2-3 times a week. If you prefer physical exfoliants, choose one with fine particles to minimize irritation.
  
        Hydration is vital for all skin types, even oily skin. Incorporate a hydrating serum containing hyaluronic acid to lock in moisture and a moisturizer suited to your needs. Dry skin benefits from thicker, cream-based options, while oily skin thrives with gel-based moisturizers. Pairing these with internal hydration—like drinking plenty of water and eating foods rich in omega-3 fatty acids—can boost skin health. Sunscreen, the ultimate anti-aging product, should be a non-negotiable part of your routine. Use SPF 30 or higher daily to protect your skin from harmful UV rays, which cause premature aging, dark spots, and even skin cancer.`,
      author: "Olivia White",
      date: "2024-12-20",
    },
    {
      id: "2",
      title: "How to Choose the Right Foundation for Your Skin Type",
      image: "/foundation.png",
      description: "Choosing the right foundation can be tricky. Here is how to find the perfect match for your skin.",
      content: `
        Selecting the ideal foundation requires understanding your skin type and its needs. For oily skin, matte foundations that control shine and contain oil-absorbing ingredients work best. Dry skin benefits from hydrating formulas infused with nourishing agents like hyaluronic acid or glycerin, offering a dewy, plump finish. Combination skin often requires a balanced formula—lightweight yet hydrating—while sensitive skin thrives with fragrance-free, non-comedogenic options designed to minimize irritation.
  
        Undertones play a critical role in finding your match. Warm undertones pair well with golden or yellow-based foundations, while cool undertones suit pink or blue-based shades. Neutral undertones are versatile and can lean either way. To determine your undertone, check the veins on your wrist. If they appear greenish, you're likely warm-toned; if blue or purple, you're cool-toned. If they're a mix, you're neutral.
  
        Foundation testing is best done in natural light to avoid mismatched shades. Swatch three shades along your jawline and blend them. The one that disappears seamlessly into your skin is your match. Also, consider your desired coverage level. Light coverage is great for daily wear, offering a natural look, while medium to full coverage works for events or when you want to conceal imperfections. Foundation should enhance your natural beauty and adapt to your skin's changes throughout the year, so don't hesitate to adjust your shade or formula as needed.`,
      author: "Lily Rose",
      date: "2024-12-18",
    },
    {
      id: "3",
      title: "The Ultimate Guide to Natural Makeup Looks",
      image: "/nomakeuplook.png",
      description: "Master the art of natural makeup with these easy-to-follow tips and product recommendations.",
      content: `
        A natural makeup look begins with a flawless base. Skin prep is essential—start with a moisturizer suited to your skin type and follow with a primer to blur imperfections. For coverage, use a tinted moisturizer or a lightweight foundation that enhances your natural skin rather than masking it. Apply a concealer sparingly on areas that need extra attention, like dark circles or blemishes, and blend well to avoid harsh edges.
  
        Eye makeup for a natural look should be subtle yet defining. Stick to neutral shades like beige, taupe, or soft pinks. Apply a light wash of color over your lids, and tightline your eyes with a brown or black eyeliner for understated definition. Mascara is a must—choose one that adds length and volume without clumping. For your brows, a tinted brow gel or a pencil can help fill sparse areas while maintaining a feathery, natural finish.
  
        Blush and highlighter are the stars of natural makeup. Use a cream or liquid blush in soft peach or rose tones, blending it into the apples of your cheeks for a youthful flush. A subtle highlighter applied to your cheekbones, the bridge of your nose, and your brow bones adds dimension and a healthy glow. Finish the look with a nude or pink-toned lip balm or lipstick that complements your skin tone. This effortless approach enhances your features, making you look polished yet relaxed.`,
      author: "Sophia Miller",
      date: "2024-12-15",
    },
    {
      id: "4",
      title: "Top 10 Beauty Hacks You Should Know",
      image: "/beauty-hacks.avif",
      description: "Simplify your beauty routine with these time-saving hacks that work like magic.",
      content: `
        Beauty hacks can transform your routine, saving you time and effort while delivering amazing results. For quick and flawless winged eyeliner, use a piece of tape angled from the outer corner of your eye to your brow. This creates a crisp edge and prevents smudges. To avoid cakey foundation, mix it with a drop of facial oil or moisturizer for a dewy, natural finish. Dry shampoo is a lifesaver on busy mornings but make sure to spray it the night before to let it fully absorb excess oils while you sleep.
  
        Dealing with lipstick stains on teeth? After applying lipstick, stick your finger in your mouth, close your lips, and pull it out. This removes excess product from the inner lip, preventing smudging. Want longer lashes without false extensions? Heat your eyelash curler slightly with a blow dryer before curling. The heat helps set the curl for an all-day lift. Always test the temperature first to avoid burns.
  
        For a budget-friendly face scrub, mix sugar and honey for an exfoliator that leaves your skin glowing. A cold spoon can reduce under-eye puffiness instantly—just chill it in the freezer and press it against the skin. Small tweaks like these can elevate your beauty game without breaking the bank or taking up too much time in your day.`,
      author: "Emily Clark",
      date: "2024-12-12",
    },
    {
      id: "5",
      title: "How to choose the right lipstick shade",
      image: "/lipcolor1.png",
      description: "Choosing the right lipstick shade can make a real difference to your makeup look. Read on to learn the different techniques and tips to making the right choice.",
      content: `
         A great shade of lipstick can tie any look together perfectly. Whether it be matte, cream or sheer, lipstick is the finishing touch that elevates with very little effort involved. If you’re not sure which colour lipstick suits you best, we have you covered. Knowing how to pick the perfect lipstick shade comes down to your skin tones and undertones. From there, it’s all about your personal preference. If you tend to leave lipstick out or don’t feel completely confident about this hero makeup product, this is your sign to introduce it back into your repertoire. You will thank us later!.`,
      author: "Lara Srokowski",
      date: "2024-12-10",
    },
    {
      id: "6",
      title: "DIY Face Masks for Every Skin Type",
      image: "/diy-face-masks.webp",
      description: "Pamper yourself with these easy DIY face mask recipes tailored to your skin's needs.",
      content: `
        DIY face masks are an affordable and fun way to care for your skin. For oily or acne-prone skin, mix bentonite clay with apple cider vinegar for a deep-cleansing mask that draws out impurities and balances oil production. Dry skin benefits from a hydrating blend of mashed avocado, honey, and olive oil, which soothes and locks in moisture. Sensitive skin? Try oatmeal and yogurt—oatmeal calms irritation while yogurt gently exfoliates.
  
        Brighten your complexion with a turmeric and honey mask, which fights inflammation and reduces dark spots. Add a dash of milk for extra hydration. If your skin needs a detox, activated charcoal mixed with aloe vera gel can help remove toxins and soothe redness. Always patch-test ingredients to ensure they suit your skin.
  
        Apply masks to clean skin and leave them on for 10-15 minutes for best results. Rinse off with lukewarm water and follow up with a moisturizer to seal in the benefits. These masks are simple to make, customizable, and packed with skin-loving nutrients that rival store-bought products.`,
      author: "Ava Johnson",
      date: "2024-12-08",
    },
  ];
  
  export default beautyBlogs