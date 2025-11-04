import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Import all images
import heroImage1 from './assets/photo-1515886657613-9f3515b0c78f.jpeg';
import heroImage2 from './assets/photo-1490481651871-ab68de25d43d.jpeg';
import editorialImage1 from './assets/photo-1483985988355-763728e1935b.jpeg';
import editorialImage2 from './assets/photo-1469334031218-e382a71b716b.jpeg';
import editorialImage3 from './assets/photo-1525562723836-dca67a71d5f1.jpeg';
import brandImage1 from './assets/photo-1551488831-00ddcb6c6bd3.jpeg';
import brandImage2 from './assets/photo-1620799140408-edc6dcb6d633.jpeg';
import articleImage1 from './assets/photo-1445633883498-7f9922d37a3f.jpeg';
import articleImage2 from './assets/photo-1506152983158-b4a74a01c721.jpeg';
import articleImage3 from './assets/photo-1496747611176-843222e1e57c.jpeg';
import editorialImage4 from './assets/photo-1539533018447-63fcce2678e3.jpeg';
import editorialImage5 from './assets/photo-1485968579580-b6d095142e6e.jpeg';
import editorialImage6 from './assets/photo-1503342217505-b0a15ec3261c.jpeg';
import productImage1 from './assets/photo-1544022613-e87ca75a784a.jpeg';
import productImage2 from './assets/photo-1578632292335-df3abbb0d586.jpeg';
import categoryImage1 from './assets/photo-1485230895905-ec40ba36b9bc.jpeg';
import categoryImage2 from './assets/photo-1483181957632-8bda974cbc91.jpeg';
import categoryImage3 from './assets/photo-1544441893-675973e31985.jpeg';
import categoryImage4 from './assets/photo-1487222477894-8943e31ef7b2.jpeg';
import categoryImage5 from './assets/photo-1512436991641-6745cdb1723f.jpeg';
import categoryImage6 from './assets/photo-1529139574466-a303027c1d8b.jpeg';
import editorialImage7 from './assets/photo-1467043153537-a4fba2cd39ef.jpeg';
import wendyImage from './assets/photo-1509631179647-0177331693ae.jpeg';

const App = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <main className="w-full max-w-[100vw] overflow-x-hidden">
        {/* Hero Section - Two Large Editorial Images (p2) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 md:px-6 py-4">
          <div className="relative group cursor-pointer overflow-hidden">
            <img
              src={heroImage1}
              alt="How to charm a room full of billionaires"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/70 to-transparent text-white">
              <p className="text-[9px] tracking-[0.15em] uppercase mb-2 text-gray-200 font-space">Culture</p>
              <h2 className="text-[18px] md:text-[24px] font-bold mb-3 leading-tight tracking-tight uppercase">
                How to Charm a Room Full of Billionaires
              </h2>
              <p className="text-[11px] md:text-[12px] leading-relaxed text-gray-100">
                An interview with viral Sotheby's auctioneer Phyllis Kao.
              </p>
            </div>
          </div>
          <div className="relative group cursor-pointer overflow-hidden">
            <img
              src={heroImage2}
              alt="Yasi goes deep"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/70 to-transparent text-white">
              <p className="text-[9px] tracking-[0.15em] uppercase mb-2 text-gray-200 font-space">Music</p>
              <h2 className="text-[18px] md:text-[24px] font-bold mb-3 leading-tight tracking-tight uppercase">
                Yasi Goes Deep
              </h2>
              <p className="text-[11px] md:text-[12px] leading-relaxed text-gray-100">
                Hello and welcome to 'Bandsplain.'
              </p>
            </div>
          </div>
        </section>

        {/* Three Editorial Images Row (p3) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-6 py-8">
          <div className="group cursor-pointer">
            <img
              src={editorialImage1}
              alt="Kelly Reichardt reimagines the art of the heist"
              className="w-full aspect-[3/4] object-cover mb-3"
            />
            <p className="text-[9px] tracking-wider uppercase text-gray-500 mb-1">IMPACT</p>
            <h3 className="text-[11px] md:text-[12px] font-medium leading-tight mb-2">
              KELLY REICHARDT REIMAGINES THE ART OF THE HEIST
            </h3>
            <p className="text-[10px] text-gray-600">Culture • Oct 17</p>
          </div>
          <div className="group cursor-pointer">
            <img
              src={editorialImage2}
              alt="Sex, fringe, and Norwegians"
              className="w-full aspect-[3/4] object-cover mb-3"
            />
            <p className="text-[9px] tracking-wider uppercase text-gray-500 mb-1">IMPACT</p>
            <h3 className="text-[11px] md:text-[12px] font-medium leading-tight mb-2">
              SEX, FRINGE, AND NORWEGIANS
            </h3>
            <p className="text-[10px] text-gray-600">Fashion • Oct 22</p>
          </div>
          <div className="group cursor-pointer">
            <img
              src={editorialImage3}
              alt="Jade Ehring and the art of aging gracefully"
              className="w-full aspect-[3/4] object-cover mb-3"
            />
            <p className="text-[9px] tracking-wider uppercase text-gray-500 mb-1">IMPACT</p>
            <h3 className="text-[11px] md:text-[12px] font-medium leading-tight mb-2">
              JADE EHRING AND THE ART OF AGING GRACEFULLY
            </h3>
            <p className="text-[10px] text-gray-600">Music • Nov 1</p>
          </div>
        </section>

        {/* Featured Brands Section (p4) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-6 py-8">
          <div className="group cursor-pointer">
            <div className="bg-black mb-4">
              <img
                src={brandImage1}
                alt="Carhartt WIP"
                className="w-full aspect-square object-cover"
              />
            </div>
            <p className="text-[9px] tracking-wider uppercase text-gray-500 mb-2">Featured</p>
            <h3 className="text-[18px] font-bold mb-4">CARHARTT WIP</h3>
            <button className="px-6 py-2.5 text-[11px] tracking-wider uppercase font-medium border border-black hover:bg-black hover:text-white transition-all">
              SHOP MENSWEAR
            </button>
          </div>
          <div className="group cursor-pointer">
            <div className="bg-gray-100 mb-4">
              <img
                src={brandImage2}
                alt="Issey Miyake"
                className="w-full aspect-square object-cover"
              />
            </div>
            <p className="text-[9px] tracking-wider uppercase text-gray-500 mb-2">Featured</p>
            <h3 className="text-[18px] font-bold mb-4">ISSEY MIYAKE</h3>
            <button className="px-6 py-2.5 text-[11px] tracking-wider uppercase font-medium border border-black hover:bg-black hover:text-white transition-all">
              SHOP WOMENSWEAR
            </button>
          </div>
        </section>

        {/* Shopping List Section (p5) */}
        <section className="px-4 md:px-6 py-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-[32px] md:text-[48px] font-light tracking-tight">SHOPPING<br />LIST</h2>
              <a href="#" className="text-[11px] tracking-wider uppercase underline hover:no-underline">
                VIEW ALL STORIES
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'WHAT THE SSENSE STAFF IS BUYING THIS SUMMER', label: 'Market' },
              { title: 'LAST-MINUTE WEDDING OUTFITS', label: 'Market' },
              { title: 'BEDROOM PLEASURES', label: 'Market' },
              { title: 'THE NEW ESOTERIC', label: 'Market' }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="mb-3">
                  <img
                    src={[categoryImage1, categoryImage2, categoryImage3, categoryImage4][index]}
                    alt={item.title}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <h3 className="text-[12px] font-medium mb-2 leading-tight">{item.title}</h3>
                <p className="text-[10px] text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Articles with Sidebar (p6) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 px-4 md:px-6 py-8">
          <article className="group cursor-pointer">
            <div className="overflow-hidden mb-2">
              <img
                src={articleImage1}
                alt="Article"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <h3 className="text-[13px] md:text-[14px] font-bold mb-1 leading-[1.1] tracking-tight uppercase">
                ARPANA RAYAMAJHI TRIES A DIFFERENT SPEED
              </h3>
              <p className="text-[8px] tracking-[0.15em] uppercase text-gray-400 mb-1">Design</p>
              <p className="text-[10px] leading-[1.4] text-gray-600">
                The celebrated jewelry designer was at the top of the world when the pace of the fashion industry became unsustainable. Now she's returning in a different medium...
              </p>
            </div>
          </article>

          <article className="group cursor-pointer">
            <div className="overflow-hidden mb-2">
              <img
                src={articleImage2}
                alt="Article"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <h3 className="text-[13px] md:text-[14px] font-bold mb-1 leading-[1.1] tracking-tight uppercase">
                THE DEMONS JUST KEPT COMING AS I WAS WRITING
              </h3>
              <p className="text-[8px] tracking-[0.15em] uppercase text-gray-400 mb-1">Culture</p>
              <p className="text-[10px] leading-[1.4] text-gray-600">
                Grace Byron on her genre-bending debut novel 'Herculine,' in which a young protagonist flees New York City to join a trans commune in the woods.
              </p>
            </div>
          </article>

          <aside className="space-y-2">
            <div className="bg-black p-3 text-white group cursor-pointer hover:bg-gradient-to-br hover:from-gray-900 hover:to-black transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="mb-2 relative">
                <h2 className="text-[22px] md:text-[26px] font-black leading-[0.8] mb-1.5 tracking-[-0.03em] font-bebas uppercase">
                  WENDY<br />CHUNGUS
                </h2>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="h-[1px] bg-gradient-to-r from-white/60 to-transparent flex-1"></div>
                  <span className="text-[7px] text-white/60 font-space">★</span>
                  <div className="h-[1px] bg-gradient-to-l from-white/60 to-transparent flex-1"></div>
                </div>
                <p className="text-[13px] md:text-[15px] font-serif italic leading-[0.95] mb-1.5 text-white/95 font-light">
                  Wears Her Tabis
                </p>
              </div>

              <div className="mb-1.5 pb-1.5 border-b border-white/10">
                <p className="text-[7px] tracking-[0.15em] uppercase text-gray-400 font-space">
                  WRITER SCOTT 2025
                </p>
              </div>

              <p className="text-[8px] leading-[1.4] mb-2 text-gray-300 font-light">
                Wendy Fest explores the cultural impact of fashion's most iconic footwear,
                diving deep into the legacy of split-toe boots and their influence on contemporary
                streetwear and high fashion aesthetics.
              </p>

              <div className="flex items-center justify-between text-[7px] tracking-[0.1em] uppercase pt-1.5 border-t border-white/5">
                <span className="text-gray-500 font-space">CULTURE • OCT 1</span>
                <span className="text-white group-hover:translate-x-1 transition-transform text-[10px]">→</span>
              </div>
            </div>
            {[
              'THE A-Z GUIDE TO STONE ISLAND',
              'THE A-Z GUIDE TO YOHJI YAMAMOTO',
              'THE A-Z GUIDE TO BALENCIAGA',
              'THE A GUIDE TO MODERN PERFUME CULTURE'
            ].map((title, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden mb-1 relative">
                  <img
                    src={[editorialImage1, editorialImage2, editorialImage3, articleImage3][index]}
                    alt={title}
                    className="w-full h-[120px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-[9px] font-bold mb-0.5 leading-[1.15] tracking-tight uppercase">{title}</h3>
                <p className="text-[7px] text-gray-400 uppercase tracking-[0.1em] font-mono">Fashion</p>
              </div>
            ))}
          </aside>
        </section>

        {/* Second Featured Products (p7) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-6 py-12 border-t border-gray-200">
          <div className="group cursor-pointer">
            <div className="bg-black mb-4">
              <img
                src={productImage1}
                alt="Hereū"
                className="w-full aspect-square object-cover"
              />
            </div>
            <p className="text-[9px] tracking-wider uppercase text-gray-500 mb-2">Featured</p>
            <h3 className="text-[18px] font-bold mb-4">HEREŪ</h3>
            <button className="px-6 py-2.5 text-[11px] tracking-wider uppercase font-medium border border-black hover:bg-black hover:text-white transition-all">
              SHOP MENSWEAR
            </button>
          </div>
          <div className="group cursor-pointer">
            <div className="bg-gray-100 mb-4">
              <img
                src={productImage2}
                alt="YMC"
                className="w-full aspect-square object-cover"
              />
            </div>
            <p className="text-[9px] tracking-wider uppercase text-gray-500 mb-2">Featured</p>
            <h3 className="text-[18px] font-bold mb-4">YMC</h3>
            <button className="px-6 py-2.5 text-[11px] tracking-wider uppercase font-medium border border-black hover:bg-black hover:text-white transition-all">
              SHOP WOMENSWEAR
            </button>
          </div>
        </section>

        {/* Large Hero Editorial Section (p8) */}
        <section className="py-16 md:py-24 px-4 md:px-6 text-center bg-white border-t border-gray-200">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-pt-serif font-normal leading-[1.15] mb-6 tracking-tight max-w-5xl mx-auto">
            THE MAKING OF A MODERN FASHION CRITIC
          </h2>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8 font-roboto-mono font-light">
            Inside the opulent world of Rachel Tashjian, the star writer courting influence between her classic newspaper column and her IYKYK newsletter.
          </p>
          <button className="px-8 py-3 text-[11px] tracking-[0.15em] uppercase font-medium border-2 border-black hover:bg-black hover:text-white transition-all">
            VIEW EDITORIAL
          </button>
        </section>

        {/* Bottom Editorial Rows (p9, p10) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-6 py-8">
          <div className="group cursor-pointer">
            <img
              src={editorialImage4}
              alt="Marwa Arsanios still doesn't tell like a woman"
              className="w-full aspect-[3/4] object-cover mb-3"
            />
            <p className="text-[9px] tracking-wider uppercase text-gray-500 mb-1">IMPACT</p>
            <h3 className="text-[11px] md:text-[12px] font-medium leading-tight mb-2">
              MARWA ARSANIOS STILL DOESN'T TELL LIKE A WOMAN
            </h3>
            <p className="text-[10px] text-gray-600">Culture • Oct 12</p>
          </div>
          <div className="group cursor-pointer">
            <img
              src={editorialImage5}
              alt="The queen of Tom fashion"
              className="w-full aspect-[3/4] object-cover mb-3"
            />
            <p className="text-[9px] tracking-wider uppercase text-gray-500 mb-1">IMPACT</p>
            <h3 className="text-[11px] md:text-[12px] font-medium leading-tight mb-2">
              THE QUEEN OF TOM FASHION
            </h3>
            <p className="text-[10px] text-gray-600">Art • Nov 9</p>
          </div>
          <div className="group cursor-pointer">
            <img
              src={editorialImage6}
              alt="A cowboy rides into the game"
              className="w-full aspect-[3/4] object-cover mb-3"
            />
            <p className="text-[9px] tracking-wider uppercase text-gray-500 mb-1">IMPACT</p>
            <h3 className="text-[11px] md:text-[12px] font-medium leading-tight mb-2">
              A COWBOY RIDES INTO THE GAME
            </h3>
            <p className="text-[10px] text-gray-600">Impact • Oct 8</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-6 py-8">
          <div className="group cursor-pointer">
            <img
              src={editorialImage7}
              alt="Griff made it herself"
              className="w-full aspect-[3/4] object-cover mb-3"
            />
            <p className="text-[9px] tracking-wider uppercase text-gray-500 mb-1">RECENT</p>
            <h3 className="text-[11px] md:text-[12px] font-medium leading-tight mb-2">
              GRIFF MADE IT HERSELF
            </h3>
            <p className="text-[10px] text-gray-600">Music • Aug 20</p>
          </div>
          <div className="group cursor-pointer">
            <img
              src={heroImage1}
              alt="Léa Dickely finds beauty in the uncanny"
              className="w-full aspect-[3/4] object-cover mb-3"
            />
            <p className="text-[9px] tracking-wider uppercase text-gray-500 mb-1">RECENT</p>
            <h3 className="text-[11px] md:text-[12px] font-medium leading-tight mb-2">
              LÉA DICKELY FINDS BEAUTY IN THE UNCANNY
            </h3>
            <p className="text-[10px] text-gray-600">Art • Aug 22</p>
          </div>
          <div className="group cursor-pointer">
            <img
              src={heroImage2}
              alt="The normal life of Earl Sweatshirt"
              className="w-full aspect-[3/4] object-cover mb-3"
            />
            <p className="text-[9px] tracking-wider uppercase text-gray-500 mb-1">RECENT</p>
            <h3 className="text-[11px] md:text-[12px] font-medium leading-tight mb-2">
              THE NORMAL LIFE OF EARL SWEATSHIRT
            </h3>
            <p className="text-[10px] text-gray-600">Music • Aug 22</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;