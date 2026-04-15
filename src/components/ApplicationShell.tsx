import { useState } from "react";

const imgVector = "https://www.figma.com/api/mcp/asset/9752c657-6a25-4be3-ba4c-31b679c28a46";
const imgVector1 = "https://www.figma.com/api/mcp/asset/75bacfb5-d924-4a3a-abd6-40ab1c659b33";
const imgVector2 = "https://www.figma.com/api/mcp/asset/dc6a8a7f-b52c-426f-92fe-0d41d42e376d";
const imgVector3 = "https://www.figma.com/api/mcp/asset/953418c8-8c53-4918-bfbd-08a65328848a";
const imgAvatarImage = "https://www.figma.com/api/mcp/asset/f0da6471-c13d-4249-8b45-8f399caa6539";
const imgImage9 = "https://www.figma.com/api/mcp/asset/46827e72-ce81-4261-a9ba-0fac21ce9e86";
const imgImage8 = "https://www.figma.com/api/mcp/asset/5e5e6105-067d-4654-9051-b9ab8ec053a3";
const imgImage10 = "https://www.figma.com/api/mcp/asset/1ba45ed2-35ee-45fd-aea1-e131d15bf92b";
const imgLogoMark = "https://www.figma.com/api/mcp/asset/0d2ba8c7-513d-47bc-b03f-5313545eaa33";
const imgVector4 = "https://www.figma.com/api/mcp/asset/904441b3-d234-4ea4-ba7c-97adf91e5a9c";
const imgVector5 = "https://www.figma.com/api/mcp/asset/ef4832f7-d700-4a13-abfa-da085f144ebe";
const imgChevronDown = "https://www.figma.com/api/mcp/asset/179c6440-8b2c-42d7-9489-e86b71a0009c";
const imgVector6 = "https://www.figma.com/api/mcp/asset/41dc26df-fcf7-4541-ac00-e1f2c6cd7bd0";
const imgVector7 = "https://www.figma.com/api/mcp/asset/edc9ed84-1f38-4215-b4d2-c566b80ae250";
const imgVector8 = "https://www.figma.com/api/mcp/asset/1ee6f4d3-4916-4c4f-809e-da58c4f402ae";
const imgVector9 = "https://www.figma.com/api/mcp/asset/78fbae68-676b-4487-a374-d840de9e18b5";
const imgVector10 = "https://www.figma.com/api/mcp/asset/f6ce445b-fa8c-44ab-ba06-babb3fcc3ef3";
const imgChevronDown1 = "https://www.figma.com/api/mcp/asset/977ab197-35c7-484e-9e65-dc5b4a0ccdb3";
const imgCaretCircleLeft = "https://www.figma.com/api/mcp/asset/0604ac15-47af-470d-9bd5-943b5f5de6f8";
const imgVector11 = "https://www.figma.com/api/mcp/asset/cc642636-ce8b-4c3c-af57-d123bc5466b7";
const imgVector12 = "https://www.figma.com/api/mcp/asset/2b398154-6380-480e-995d-f3fff44953db";
const imgVector13 = "https://www.figma.com/api/mcp/asset/74b8bd86-10c3-4a62-93e7-ce8c5e6c5581";
const imgVector14 = "https://www.figma.com/api/mcp/asset/a9d5d867-80e8-411b-a0ee-54f3f521114b";
const imgVector15 = "https://www.figma.com/api/mcp/asset/6dc0a4a4-fc18-4a17-ad18-aad22760ac84";
const imgVector16 = "https://www.figma.com/api/mcp/asset/f9e00646-5530-4153-84e0-1c1d8e29adab";
const imgVector17 = "https://www.figma.com/api/mcp/asset/4d96a64f-2807-4a7f-8ee2-358819ecf8ac";
const imgVector18 = "https://www.figma.com/api/mcp/asset/581bb823-79b0-4298-8e12-54f9086e4862";
const imgVector19 = "https://www.figma.com/api/mcp/asset/176d8e58-7f8c-47bd-a412-fba4b3300fd7";
const imgVector20 = "https://www.figma.com/api/mcp/asset/bb9d1ad6-83e4-430e-9506-1efadccd8513";
const imgVector21 = "https://www.figma.com/api/mcp/asset/6577d8d4-1021-464a-81c7-8f0bf0de39da";
const imgVector22 = "https://www.figma.com/api/mcp/asset/c4fd99e8-bd0b-4227-83b0-878e9b650792";

function Bell({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-node-id="1:9210" data-name="bell">
      <div className="absolute inset-[8.33%_12.5%]" data-node-id="1:9211" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
      </div>
    </div>
  );
}

function Search({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-node-id="1:9155" data-name="search">
      <div className="absolute inset-[11.97%_13.46%_13.41%_11.93%]" data-node-id="1:9156" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
      </div>
    </div>
  );
}

function Cog({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-node-id="1:9034" data-name="cog">
      <div className="absolute inset-[8.33%_10.74%]" data-node-id="1:9035" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
      </div>
    </div>
  );
}

function HelpCircle({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-node-id="1:9032" data-name="help-circle">
      <div className="absolute inset-[8.33%]" data-node-id="1:9033" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
      </div>
    </div>
  );
}

export default function ApplicationShell({ className }: { className?: string }) {
  type Category = "dashboard" | "urgent" | "moderate" | "spam";
  interface EmailRow { subject: string; date: string; }

  const moderateEmails: EmailRow[] = [
    { subject: 'State Farm - "Policy renewal reminder for your home"', date: "12/20" },
    { subject: 'Allstate - "Your auto claim update is ready to review"', date: "12/19" },
    { subject: 'Progressive - "We need additional info for your claim"', date: "12/19" },
    { subject: 'Client - "Question about my deductible before surgery"', date: "12/18" },
    { subject: 'HR Dept - "Benefits enrollment closes this Friday"', date: "12/17" },
    { subject: 'Lender - "Proof of insurance required before closing"', date: "12/17" },
    { subject: 'Client - "Comparing quotes — can you call me today?"', date: "12/16" },
    { subject: 'Broker - "New group plan options for Q1 — please review"', date: "12/15" },
  ];

  const spamEmails: EmailRow[] = [
    { subject: 'Newsletter - "Top insurance tips for the new year"', date: "12/20" },
    { subject: 'MarketingCo - "You\'ve been selected for a free quote!"', date: "12/20" },
    { subject: 'AutoInsure.io - "Switch and save up to 40% today"', date: "12/19" },
    { subject: 'LifeCoverage - "Final notice: limited offer expires soon"', date: "12/19" },
    { subject: 'Reddit - "Desperately need advice — insurance question"', date: "12/18" },
    { subject: 'BizPromo - "Partner opportunity: refer and earn"', date: "12/18" },
    { subject: 'QuoteFinder - "3 carriers want to give you a quote now"', date: "12/17" },
    { subject: 'HealthPlus - "Open enrollment ends soon — don\'t miss out"', date: "12/17" },
    { subject: 'CarInsure - "Your car may qualify for lower rates"', date: "12/16" },
    { subject: 'PetCoverage - "Is your pet protected? Find out now"', date: "12/16" },
    { subject: 'GenericOffer - "Exclusive deal just for you"', date: "12/15" },
    { subject: 'SpamAlert - "You may have unclaimed insurance benefits"', date: "12/14" },
  ];

  const [activeCategory, setActiveCategory] = useState<Category>("dashboard");

  const activeNavClass = "bg-white rounded-[4px] shadow-[0px_2px_3px_0px_rgba(0,0,0,0.09)]";
  const navItemClass = (cat: Category) =>
    `content-stretch flex items-center pl-[44px] pr-[8px] py-[8px] relative shrink-0 w-full${activeCategory === cat ? ` ${activeNavClass}` : ""}`;
  const dashboardNavClass = `${activeCategory === "dashboard" ? "bg-white " : ""}content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[4px] ${activeCategory === "dashboard" ? "shadow-[0px_2px_3px_0px_rgba(0,0,0,0.09)] " : ""}shrink-0 w-full`;

  return (
    <div className={className || "flex min-h-[900px] min-h-screen w-full max-w-[1440px] items-start overflow-x-auto overflow-y-hidden bg-[#eee]"} data-node-id="1:9654" data-name="Application Shell / 9 //Breakpoint4">
      <div className="bg-white border-black border-r border-solid content-stretch flex flex-col min-h-[900px] min-h-screen items-start overflow-clip pt-2 relative shrink-0 w-[312px]" data-node-id="1:9655" data-name="Sidebar / 4 /">
        <div className="border-b border-black border-solid content-stretch flex flex-col items-start px-[24px] py-[6px] relative shrink-0 w-full" data-node-id="1:9656" data-name="Menu Top">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1:9657" data-name="Row">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative shrink-0" data-node-id="1:9658" data-name="Logo Group">
              <div className="h-[34px] relative shrink-0 w-[44.125px]" data-node-id="1:9659" data-name="Logo-mark">
                <div className="absolute inset-[-3.68%_-2.83%]">
                  <img alt="" className="block max-w-none size-full" src={imgLogoMark} />
                </div>
              </div>
              <div className="flex flex-col font-serif font-medium font-medium h-[44px] justify-center leading-[0] relative shrink-0 text-[48px] text-black w-[148px]" data-node-id="1:9663">
                <p className="leading-[normal]">Arvori</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pb-[24px] pt-[8px] px-[16px] relative w-full" data-node-id="1:9664" data-name="Menu List">
          <div className={dashboardNavClass} onClick={() => setActiveCategory("dashboard")} style={{ cursor: "pointer" }} data-node-id="1:9665" data-name="Nav Link">
            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-node-id="1:9666" data-name="Content">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:9667" data-name="home">
                <div className="absolute inset-[8.33%]" data-node-id="I1:9667;4179:9463" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <p className="flex-[1_0_0] font-sans font-normal leading-[1.5] min-w-px relative text-black text-base" data-node-id="1:9668" style={{ fontVariationSettings: "'wdth' 100" }}>
                Dashboard
              </p>
            </div>
            <div className="border border-black border-solid content-stretch flex items-start px-[8px] relative rounded-[50px] shrink-0" data-node-id="1:9669" data-name="Badge">
              <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-black text-sm whitespace-nowrap" data-node-id="1:9670" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[1.5]">24</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:9671" data-name="Menu List">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative shrink-0 w-full" data-node-id="1:9672" data-name="Menu Trigger">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-node-id="1:9673" data-name="Content">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:9674" data-name="pie-chart-alt-2">
                  <div className="absolute inset-[8.33%]" data-node-id="I1:9674;4179:9895" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                  </div>
                </div>
                <p className="flex-[1_0_0] font-sans font-normal leading-[1.5] min-w-px relative text-black text-base" data-node-id="1:9675" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Frontline Triage
                </p>
              </div>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-180">
                  <div className="relative size-[20px]" data-node-id="1:9676" data-name="Chevron Down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
                  </div>
                </div>
              </div>
            </div>
            <div className={navItemClass("urgent")} onClick={() => setActiveCategory("urgent")} style={{ cursor: "pointer" }} data-node-id="1:9678" data-name="Nav Link">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-node-id="1:9679" data-name="Content">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:9680" data-name="trending-up">
                  <div className="absolute inset-[20.83%_8.33%_30.39%_9.55%]" data-node-id="I1:9680;4179:9949" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
                  </div>
                </div>
                <p className="flex-[1_0_0] font-sans font-normal leading-[1.5] min-w-px relative text-black text-base" data-node-id="1:9681" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Urgent
                </p>
              </div>
            </div>
            <div className={navItemClass("moderate")} onClick={() => setActiveCategory("moderate")} style={{ cursor: "pointer" }} data-node-id="1:9682" data-name="Nav Link">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-node-id="1:9683" data-name="Content">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:9684" data-name="bar-chart-alt-2">
                  <div className="absolute inset-[8.33%_8.33%_12.5%_8.33%]" data-node-id="I1:9684;4179:9897" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} />
                  </div>
                </div>
                <p className="flex-[1_0_0] font-sans font-normal leading-[1.5] min-w-px relative text-black text-base" data-node-id="1:9685" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Moderate
                </p>
              </div>
            </div>
            <div className={navItemClass("spam")} onClick={() => setActiveCategory("spam")} style={{ cursor: "pointer" }} data-node-id="1:9686" data-name="Nav Link">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-node-id="1:9687" data-name="Content">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:9688" data-name="archive">
                  <div className="absolute inset-[8.33%_8.33%_12.5%_8.33%]" data-node-id="I1:9688;4179:9852" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector8} />
                  </div>
                </div>
                <p className="flex-[1_0_0] font-sans font-normal leading-[1.5] min-w-px relative text-black text-base" data-node-id="1:9689" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Potential Spam
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center p-[8px] relative shrink-0 w-full" data-node-id="1:9690" data-name="Nav Link">
            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-node-id="1:9691" data-name="Content">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:9692" data-name="layer">
                <div className="absolute inset-[8.34%_8.33%_8.33%_8.34%]" data-node-id="I1:9692;4179:9657" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} />
                </div>
              </div>
              <p className="flex-[1_0_0] font-sans font-normal leading-[1.5] min-w-px relative text-black text-base" data-node-id="1:9693" style={{ fontVariationSettings: "'wdth' 100" }}>
                Cross-sell Center
              </p>
            </div>
          </div>
          <div className="content-stretch flex items-center p-[8px] relative shrink-0 w-full" data-node-id="1:9694" data-name="Nav Link">
            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-node-id="1:9695" data-name="Content">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="1:9696" data-name="file">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I1:9696;4179:9822" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector10} />
                </div>
              </div>
              <p className="flex-[1_0_0] font-sans font-normal leading-[1.5] min-w-px relative text-black text-base" data-node-id="1:9697" style={{ fontVariationSettings: "'wdth' 100" }}>
                Document Center
              </p>
            </div>
          </div>
        </div>
        <div className="border-black border-solid border-t content-stretch flex flex-col items-start pb-[24px] px-[16px] relative shrink-0 w-full" data-node-id="1:9698" data-name="Menu Bottom">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:9699" data-name="Menu List">
            <div className="content-stretch flex items-center p-[8px] relative shrink-0 w-full" data-node-id="1:9700" data-name="Nav Link">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-node-id="1:9701" data-name="Content">
                <HelpCircle className="overflow-clip relative shrink-0 size-[24px]" />
                <p className="flex-[1_0_0] font-sans font-normal leading-[1.5] min-w-px relative text-black text-base" data-node-id="1:9703" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Support
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-center p-[8px] relative shrink-0 w-full" data-node-id="1:9704" data-name="Nav Link">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-node-id="1:9705" data-name="Content">
                <Cog className="overflow-clip relative shrink-0 size-[24px]" />
                <p className="flex-[1_0_0] font-sans font-normal leading-[1.5] min-w-px relative text-black text-base" data-node-id="1:9707" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Settings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-node-id="1:9708" data-name="Main Content">
        <div className="bg-white border-black border-b border-solid content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-node-id="1:9709" data-name="Topbar / 3 /">
          <div className="content-stretch flex h-[72px] items-center justify-between overflow-clip px-[32px] relative shrink-0 w-full" data-node-id="I1:9709;4174:122711" data-name="Container">
            <div className="border-2 border-accent border-solid content-stretch flex gap-[12px] h-[40px] items-center px-[12px] py-[8px] relative rounded-[6px] shrink-0 w-[540px]" data-node-id="I1:9709;4174:122712" data-name="Text input">
              <Search className="overflow-clip relative shrink-0 size-[24px]" />
              <p className="flex-[1_0_0] font-sans font-normal leading-[1.5] min-w-px relative text-base text-[rgba(0,0,0,0.6)]" data-node-id="I1:9709;4174:122712;4179:9028" style={{ fontVariationSettings: "'wdth' 100" }}>
                Search
              </p>
            </div>
            <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-node-id="I1:9709;4174:122713" data-name="Column">
              <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-node-id="I1:9709;4174:122714" data-name="Nav Link">
                <Bell className="overflow-clip relative shrink-0 size-[24px]" />
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1:9709;4174:122716" data-name="Profile">
                <div className="relative shrink-0 size-[40px]" data-node-id="I1:9709;4174:122717" data-name="Avatar Image">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" height="40" src={imgAvatarImage} width="40" />
                </div>
                <p className="font-sans font-normal leading-[1.5] relative shrink-0 text-black text-base whitespace-nowrap" data-node-id="I1:9709;4174:122718" style={{ fontVariationSettings: "'wdth' 100" }}>
                  D’Aaron Gonzalez
                </p>
                <div className="relative shrink-0 size-[24px]" data-node-id="I1:9709;4174:122719" data-name="Chevron Down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface content-stretch flex flex-col items-start justify-center overflow-clip p-[24px] relative shrink-0 w-full" data-node-id="1:9710" data-name="Header">
          <p className="font-serif font-bold leading-[1.2] relative shrink-0 text-heading text-[40px] text-center whitespace-nowrap" data-node-id="1:9711">
            Point of The Mountain Insurance
          </p>
        </div>
        <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[26px] items-center min-h-px overflow-clip px-[32px] py-[36px] relative w-full" data-node-id="1:9712" data-name="Content">
          {activeCategory === "dashboard" && (
            <>
            <div className="bg-surface content-stretch flex flex-col h-[347px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[1064px]" data-node-id="1:9713" data-name="Column">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px overflow-clip p-[12px] relative rounded-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.11)] w-full" data-node-id="1:9714">
              <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 w-full" data-node-id="1:9715">
                <div className="flex flex-col font-serif font-bold h-[52px] justify-center relative shrink-0 text-[40px] text-black w-[157px]" data-node-id="1:9716">
                  <p className="leading-[1.2]">To Do:</p>
                </div>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="1:9717" data-name="arrow-icons">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]" data-node-id="1:9718" data-name="CaretCircleLeft">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretCircleLeft} />
                    <div className="absolute inset-[12.5%]" data-node-id="I1:9718;9586:1436" data-name="Vector">
                      <div className="absolute inset-[-4.17%]">
                        <img alt="" className="block max-w-none size-full" src={imgVector11} />
                      </div>
                    </div>
                    <div className="absolute inset-[35.94%_43.75%_35.94%_40.63%]" data-node-id="I1:9718;9586:1437" data-name="Vector">
                      <div className="absolute inset-[-11.11%_-20%]">
                        <img alt="" className="block max-w-none size-full" src={imgVector12} />
                      </div>
                    </div>
                  </div>
                  <div className="col-1 ml-[42px] mt-0 relative row-1 size-[32px]" data-node-id="1:9719" data-name="CaretCircleRight">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretCircleLeft} />
                    <div className="absolute inset-[12.5%]" data-node-id="I1:9719;9586:1432" data-name="Vector">
                      <div className="absolute inset-[-4.17%]">
                        <img alt="" className="block max-w-none size-full" src={imgVector11} />
                      </div>
                    </div>
                    <div className="absolute inset-[35.94%_39.06%_35.94%_45.31%]" data-node-id="I1:9719;9586:1433" data-name="Vector">
                      <div className="absolute inset-[-11.11%_-20%]">
                        <img alt="" className="block max-w-none size-full" src={imgVector13} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:9720">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:9721">
                  <div className="relative shrink-0 size-[32px]" data-node-id="1:9722" data-name="CircleWavyWarning">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretCircleLeft} />
                    <div className="absolute inset-[9.38%]" data-node-id="I1:9722;9575:22081" data-name="Vector">
                      <div className="absolute inset-[-3.85%]">
                        <img alt="" className="block max-w-none size-full" src={imgVector14} />
                      </div>
                    </div>
                    <div className="absolute bottom-[46.88%] left-1/2 right-1/2 top-[31.25%]" data-node-id="I1:9722;9575:22082" data-name="Vector">
                      <div className="absolute inset-[-14.29%_-1px]">
                        <img alt="" className="block max-w-none size-full" src={imgVector15} />
                      </div>
                    </div>
                    <div className="absolute inset-[62.5%_45.31%_28.13%_45.31%]" data-node-id="I1:9722;9575:22083" data-name="Vector">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector16} />
                    </div>
                  </div>
                  <div className="flex flex-col font-sans font-normal h-[23px] justify-center leading-[0] relative shrink-0 text-base text-black text-center w-[125px]" data-node-id="1:9723" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.5]">Urgent Requests</p>
                  </div>
                </div>
                <div className="h-[34px] relative shrink-0 w-[55px]" data-node-id="1:9724">
                  <div className="absolute bg-urgent left-[21px] rounded-[8px] size-[34px] top-0" data-node-id="1:9725" />
                  <div className="-translate-y-1/2 absolute flex flex-col font-anaheim font-semibold h-[18px] justify-center leading-[0] left-[33px] text-[#eee] text-lg top-[17px] w-[9px]" data-node-id="1:9726">
                    <p className="leading-[1.5]">4</p>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px p-[12px] relative rounded-[20px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.06)] w-full" data-node-id="1:9727">
                <div className="bg-[#eee] content-stretch flex items-center justify-between relative rounded-[4px] shrink-0 w-full" data-node-id="1:9728">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[917.388px]" data-node-id="1:9729">
                    <div className="relative shrink-0 size-[32px]" data-node-id="1:9730" data-name="EnvelopeSimple">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretCircleLeft} />
                      <div className="absolute inset-[21.88%_12.5%]" data-node-id="I1:9730;9575:21869" data-name="Vector">
                        <div className="absolute inset-[-5.56%_-4.17%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector17} />
                        </div>
                      </div>
                      <div className="absolute inset-[21.88%_12.5%_43.75%_12.5%]" data-node-id="I1:9730;9575:21870" data-name="Vector">
                        <div className="absolute inset-[-9.09%_-4.17%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector18} />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-sans font-normal h-[23px] justify-center leading-[0] relative shrink-0 text-base text-black w-[485px]" data-node-id="1:9731" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.5]">Reddit - “Desperately need advice - husband diagnosed with cancer”</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-[80.381px]" data-node-id="1:9732">
                    <div className="flex flex-col font-anaheim font-semibold h-[18px] justify-center leading-[0] relative shrink-0 text-black text-lg text-right w-[46px]" data-node-id="1:9733">
                      <p className="leading-[1.5]">12/18</p>
                    </div>
                  </div>
                </div>
                <div className="flex-[1_0_0] grid-rows-[max-content] inline-grid leading-[0] min-h-px place-items-start relative w-full" data-node-id="1:9734">
                  <div className="col-1 content-stretch flex gap-[43px] h-[123px] items-center justify-center ml-0 mt-0 overflow-clip p-[12px] relative row-1 w-full" data-node-id="1:9735">
                    <div className="bg-white content-stretch flex flex-col gap-[12px] items-center justify-center p-[12px] relative rounded-[12px] shadow-[0px_2px_5.5px_0px_rgba(0,0,0,0.35)] shrink-0 w-[153px]" data-node-id="1:9736" data-name="zoom-notifications">
                      <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-[144px]" data-node-id="1:9737">
                        <div className="relative shrink-0 size-[26px]" data-node-id="1:9738" data-name="image 9">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
                        </div>
                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="1:9739">
                          <p className="col-1 font-anaheim font-bold font-bold h-[26px] leading-[normal] ml-0 mt-0 relative row-1 text-[10px] text-black w-[111px]" data-node-id="1:9740">
                            High Urgency Request: Personal Emergency
                          </p>
                        </div>
                      </div>
                      <p className="font-anaheim font-medium font-medium h-[13px] leading-[normal] relative shrink-0 text-[10px] text-black text-center w-[148px]" data-node-id="1:9741">
                        Book Next Available Zoom Slot?
                      </p>
                      <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-[144px]" data-node-id="1:9742">
                        <div className="border-[0.5px] border-accent border-solid content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[18px] shrink-0" data-node-id="1:9743" data-name="Yes-button">
                          <p className="font-anaheim font-medium font-medium leading-[normal] relative shrink-0 text-[10px] text-black text-center whitespace-nowrap" data-node-id="1:9744">
                            Yes
                          </p>
                        </div>
                        <div className="border-[0.5px] border-accent border-solid content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[18px] shrink-0" data-node-id="1:9745" data-name="Yes-button">
                          <p className="font-anaheim font-medium font-medium leading-[normal] relative shrink-0 text-[10px] text-black text-center whitespace-nowrap" data-node-id="1:9746">
                            No
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white content-stretch flex flex-col gap-[6px] items-center justify-center p-[12px] relative rounded-[12px] shadow-[0px_2px_5.5px_0px_rgba(0,0,0,0.35)] shrink-0 w-[153px]" data-node-id="1:9747" data-name="gmail-notifications">
                      <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-[144px]" data-node-id="1:9748">
                        <div className="bg-white content-stretch flex flex-col h-[20px] items-start p-[2px] relative rounded-[4px] shrink-0 w-[26px]" data-node-id="1:9749" data-name="gmail-icon">
                          <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-node-id="1:9750">
                            <div className="aspect-[260/194] col-1 ml-0 mt-0 relative row-1 w-full" data-node-id="1:9751" data-name="image 8">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="1:9752">
                          <p className="col-1 font-anaheim font-bold font-bold h-[26px] leading-[normal] ml-0 mt-0 relative row-1 text-[10px] text-black w-[111px]" data-node-id="1:9753">
                            High Urgency Request: Medical Emergency
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:9754">
                        <p className="font-anaheim font-medium font-medium h-[26px] leading-[normal] relative shrink-0 text-[10px] text-black text-center w-[148px]" data-node-id="1:9755">
                          Send Document Portal to Gather Asset Details?
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-[144px]" data-node-id="1:9756">
                        <div className="border-[0.5px] border-accent border-solid content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[18px] shrink-0" data-node-id="1:9757" data-name="Yes-button">
                          <p className="font-anaheim font-medium font-medium leading-[normal] relative shrink-0 text-[10px] text-black text-center whitespace-nowrap" data-node-id="1:9758">
                            Yes
                          </p>
                        </div>
                        <div className="border-[0.5px] border-accent border-solid content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[18px] shrink-0" data-node-id="1:9759" data-name="Yes-button">
                          <p className="font-anaheim font-medium font-medium leading-[normal] relative shrink-0 text-[10px] text-black text-center whitespace-nowrap" data-node-id="1:9760">
                            No
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white content-stretch flex flex-col gap-[6px] items-center justify-center p-[12px] relative rounded-[12px] shadow-[0px_2px_5.5px_0px_rgba(0,0,0,0.35)] shrink-0 w-[153px]" data-node-id="1:9761" data-name="gmail-notifications">
                      <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-[144px]" data-node-id="1:9762">
                        <div className="bg-white content-stretch flex flex-col h-[20px] items-start p-[2px] relative rounded-[4px] shrink-0 w-[26px]" data-node-id="1:9763" data-name="gmail-icon">
                          <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-node-id="1:9764">
                            <div className="aspect-[260/194] col-1 ml-0 mt-0 relative row-1 w-full" data-node-id="1:9765" data-name="image 8">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="1:9766">
                          <p className="col-1 font-anaheim font-bold font-bold h-[26px] leading-[normal] ml-0 mt-0 relative row-1 text-[10px] text-black w-[111px]" data-node-id="1:9767">
                            High Urgency Request: Medical Emergency
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:9768">
                        <p className="font-anaheim font-medium font-medium h-[26px] leading-[normal] relative shrink-0 text-[10px] text-black text-center w-[148px]" data-node-id="1:9769">
                          Draft Email Response?
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-[144px]" data-node-id="1:9770">
                        <div className="border-[0.5px] border-accent border-solid content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[18px] shrink-0" data-node-id="1:9771" data-name="Yes-button">
                          <p className="font-anaheim font-medium font-medium leading-[normal] relative shrink-0 text-[10px] text-black text-center whitespace-nowrap" data-node-id="1:9772">
                            Generate
                          </p>
                        </div>
                        <div className="border-[0.5px] border-accent border-solid content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[18px] shrink-0" data-node-id="1:9773" data-name="Yes-button">
                          <p className="font-anaheim font-medium font-medium leading-[normal] relative shrink-0 text-[10px] text-black text-center whitespace-nowrap" data-node-id="1:9774">
                            Open Editor
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white content-stretch flex flex-col gap-[6px] items-center justify-center p-[12px] relative rounded-[12px] shadow-[0px_2px_5.5px_0px_rgba(0,0,0,0.35)] shrink-0 w-[153px]" data-node-id="1:9775" data-name="gmail-notifications">
                      <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-[144px]" data-node-id="1:9776">
                        <div className="bg-white content-stretch flex flex-col h-[20px] items-center p-[2px] relative rounded-[4px] shrink-0 w-[26px]" data-node-id="1:9777" data-name="gmail-icon">
                          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="1:9778">
                            <div className="col-1 ml-0 mt-0 relative row-1 size-[16px]" data-node-id="1:9779" data-name="image 10">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="1:9780">
                          <p className="col-1 font-anaheim font-bold font-bold h-[26px] leading-[normal] ml-0 mt-0 relative row-1 text-[10px] text-black w-[111px]" data-node-id="1:9781">
                            High Urgency Request: Medical Emergency
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="1:9782">
                        <p className="font-anaheim font-medium font-medium h-[26px] leading-[normal] relative shrink-0 text-[10px] text-black text-center w-[148px]" data-node-id="1:9783">
                          Send Calendar Link for Weekly Availability and Check In?
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-[144px]" data-node-id="1:9784">
                        <div className="border-[0.5px] border-accent border-solid content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[18px] shrink-0" data-node-id="1:9785" data-name="Yes-button">
                          <p className="font-anaheim font-medium font-medium leading-[normal] relative shrink-0 text-[10px] text-black text-center whitespace-nowrap" data-node-id="1:9786">
                            Yes
                          </p>
                        </div>
                        <div className="border-[0.5px] border-accent border-solid content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[18px] shrink-0" data-node-id="1:9787" data-name="Yes-button">
                          <p className="font-anaheim font-medium font-medium leading-[normal] relative shrink-0 text-[10px] text-black text-center whitespace-nowrap" data-node-id="1:9788">
                            No
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[26px] items-start justify-center relative shrink-0" data-node-id="1:9789">
            <div className="bg-surface content-stretch flex flex-col gap-[26px] h-[306px] items-start p-[8px] relative rounded-[12px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-[520px]" data-node-id="1:9790" data-name="Column">
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-node-id="1:9791">
                <div className="content-stretch flex h-[52px] items-center relative shrink-0 w-[504px]" data-node-id="1:9792">
                  <div className="flex flex-col font-serif font-bold h-[52px] justify-center leading-[0] relative shrink-0 text-[40px] text-black w-[191px]" data-node-id="1:9793">
                    <p className="leading-[1.2]">Next Up:</p>
                  </div>
                </div>
                <div className="content-stretch flex h-[34px] items-center justify-between relative shrink-0 w-[504px]" data-node-id="1:9794">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:9795">
                    <div className="relative shrink-0 size-[32px]" data-node-id="1:9796" data-name="CircleWavyWarning">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretCircleLeft} />
                      <div className="absolute inset-[9.38%]" data-node-id="I1:9796;9575:22081" data-name="Vector">
                        <div className="absolute inset-[-3.85%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector19} />
                        </div>
                      </div>
                      <div className="absolute bottom-[46.88%] left-1/2 right-1/2 top-[31.25%]" data-node-id="I1:9796;9575:22082" data-name="Vector">
                        <div className="absolute inset-[-14.29%_-1px]">
                          <img alt="" className="block max-w-none size-full" src={imgVector15} />
                        </div>
                      </div>
                      <div className="absolute inset-[62.5%_45.31%_28.13%_45.31%]" data-node-id="I1:9796;9575:22083" data-name="Vector">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector16} />
                      </div>
                    </div>
                    <div className="flex flex-col font-sans font-normal h-[23px] justify-center leading-[0] relative shrink-0 text-base text-black text-center w-[154px]" data-node-id="1:9797" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.5]">Moderate Requests</p>
                    </div>
                  </div>
                  <div className="h-[34px] relative shrink-0 w-[55px]" data-node-id="1:9798">
                    <div className="absolute bg-moderate left-[21px] rounded-[8px] size-[34px] top-0" data-node-id="1:9799" />
                    <div className="-translate-y-1/2 absolute flex flex-col font-anaheim font-semibold h-[18px] justify-center leading-[0] left-[33px] text-[#eee] text-lg top-[17px] w-[9px]" data-node-id="1:9800">
                      <p className="leading-[1.5]">8</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[9px] py-[8px] relative rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.11)] shrink-0 w-full" data-node-id="1:9801">
                <div className="bg-[#eee] content-stretch flex items-center justify-between px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:9802">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[267px]" data-node-id="1:9803">
                    <div className="relative shrink-0 size-[32px]" data-node-id="1:9804" data-name="EnvelopeSimple">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretCircleLeft} />
                      <div className="absolute inset-[21.88%_12.5%]" data-node-id="I1:9804;9575:21869" data-name="Vector">
                        <div className="absolute inset-[-5.56%_-4.17%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector17} />
                        </div>
                      </div>
                      <div className="absolute inset-[21.88%_12.5%_43.75%_12.5%]" data-node-id="I1:9804;9575:21870" data-name="Vector">
                        <div className="absolute inset-[-9.09%_-4.17%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector18} />
                        </div>
                      </div>
                    </div>
                    <div className="bg-clip-text bg-gradient-to-r flex flex-col font-sans font-normal from-[56.415%] from-black h-[23px] justify-center leading-[0] relative shrink-0 text-base text-[transparent] to-[88.302%] to-[rgba(102,102,102,0)] w-[265px]" data-node-id="1:9805" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.5]">Reddit - “Desperately need advice..</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0" data-node-id="1:9806">
                    <div className="flex flex-col font-anaheim font-semibold h-[18px] justify-center leading-[0] relative shrink-0 text-black text-lg text-right w-[46px]" data-node-id="1:9807">
                      <p className="leading-[1.5]">12/18</p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-row content-stretch flex items-center justify-between px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:9808">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[267px]" data-node-id="1:9809">
                    <div className="relative shrink-0 size-[32px]" data-node-id="1:9810" data-name="EnvelopeSimple">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretCircleLeft} />
                      <div className="absolute inset-[21.88%_12.5%]" data-node-id="I1:9810;9575:21869" data-name="Vector">
                        <div className="absolute inset-[-5.56%_-4.17%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector17} />
                        </div>
                      </div>
                      <div className="absolute inset-[21.88%_12.5%_43.75%_12.5%]" data-node-id="I1:9810;9575:21870" data-name="Vector">
                        <div className="absolute inset-[-9.09%_-4.17%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector18} />
                        </div>
                      </div>
                    </div>
                    <div className="bg-clip-text bg-gradient-to-r flex flex-col font-sans font-normal from-[56.415%] from-black h-[23px] justify-center leading-[0] relative shrink-0 text-base text-[transparent] to-[88.302%] to-[rgba(102,102,102,0)] w-[265px]" data-node-id="1:9811" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.5]">Reddit - “Desperately need advice..</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0" data-node-id="1:9812">
                    <div className="flex flex-col font-anaheim font-semibold h-[18px] justify-center leading-[0] relative shrink-0 text-black text-lg text-right w-[46px]" data-node-id="1:9813">
                      <p className="leading-[1.5]">12/18</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#eee] content-stretch flex items-center justify-between px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:9814">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[267px]" data-node-id="1:9815">
                    <div className="relative shrink-0 size-[32px]" data-node-id="1:9816" data-name="EnvelopeSimple">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretCircleLeft} />
                      <div className="absolute inset-[21.88%_12.5%]" data-node-id="I1:9816;9575:21869" data-name="Vector">
                        <div className="absolute inset-[-5.56%_-4.17%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector17} />
                        </div>
                      </div>
                      <div className="absolute inset-[21.88%_12.5%_43.75%_12.5%]" data-node-id="I1:9816;9575:21870" data-name="Vector">
                        <div className="absolute inset-[-9.09%_-4.17%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector18} />
                        </div>
                      </div>
                    </div>
                    <div className="bg-clip-text bg-gradient-to-r flex flex-col font-sans font-normal from-[56.415%] from-black h-[23px] justify-center leading-[0] relative shrink-0 text-base text-[transparent] to-[88.302%] to-[rgba(102,102,102,0)] w-[265px]" data-node-id="1:9817" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.5]">Reddit - “Desperately need advice..</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0" data-node-id="1:9818">
                    <div className="flex flex-col font-anaheim font-semibold h-[18px] justify-center leading-[0] relative shrink-0 text-black text-lg text-right w-[46px]" data-node-id="1:9819">
                      <p className="leading-[1.5]">12/18</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface content-stretch flex flex-col gap-[26px] h-[306px] items-start p-[8px] relative rounded-[12px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)] shrink-0 w-[520px]" data-node-id="1:9820" data-name="Column">
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-node-id="1:9821">
                <div className="content-stretch flex h-[52px] items-center relative shrink-0 w-[504px]" data-node-id="1:9822">
                  <div className="flex flex-col font-serif font-bold h-[52px] justify-center leading-[0] relative shrink-0 text-[40px] text-black w-[191px]" data-node-id="1:9823">
                    <p className="leading-[1.2]">Misc:</p>
                  </div>
                </div>
                <div className="content-stretch flex h-[34px] items-center justify-between relative shrink-0 w-[504px]" data-node-id="1:9824">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:9825">
                    <div className="relative shrink-0 size-[32px]" data-node-id="1:9826" data-name="CircleWavyWarning">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretCircleLeft} />
                      <div className="absolute inset-[9.38%]" data-node-id="I1:9826;9575:22081" data-name="Vector">
                        <div className="absolute inset-[-3.85%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector20} />
                        </div>
                      </div>
                      <div className="absolute bottom-[46.88%] left-1/2 right-1/2 top-[31.25%]" data-node-id="I1:9826;9575:22082" data-name="Vector">
                        <div className="absolute inset-[-14.29%_-1px]">
                          <img alt="" className="block max-w-none size-full" src={imgVector21} />
                        </div>
                      </div>
                      <div className="absolute inset-[62.5%_45.31%_28.13%_45.31%]" data-node-id="I1:9826;9575:22083" data-name="Vector">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector22} />
                      </div>
                    </div>
                    <div className="flex flex-col font-sans font-normal h-[23px] justify-center leading-[0] relative shrink-0 text-base text-black text-center w-[154px]" data-node-id="1:9827" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.5]">Potential Spam</p>
                    </div>
                  </div>
                  <div className="h-[34px] relative shrink-0 w-[55px]" data-node-id="1:9828">
                    <div className="absolute bg-border-muted left-[21px] rounded-[8px] size-[34px] top-0" data-node-id="1:9829" />
                    <div className="-translate-y-1/2 absolute flex flex-col font-anaheim font-semibold h-[18px] justify-center leading-[0] left-[29px] text-[#eee] text-lg top-[17px] w-[17px]" data-node-id="1:9830">
                      <p className="leading-[1.5]">12</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[9px] py-[8px] relative rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.11)] shrink-0 w-full" data-node-id="1:9831">
                <div className="bg-[#eee] content-stretch flex items-center justify-between px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:9832">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[267px]" data-node-id="1:9833">
                    <div className="relative shrink-0 size-[32px]" data-node-id="1:9834" data-name="EnvelopeSimple">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretCircleLeft} />
                      <div className="absolute inset-[21.88%_12.5%]" data-node-id="I1:9834;9575:21869" data-name="Vector">
                        <div className="absolute inset-[-5.56%_-4.17%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector17} />
                        </div>
                      </div>
                      <div className="absolute inset-[21.88%_12.5%_43.75%_12.5%]" data-node-id="I1:9834;9575:21870" data-name="Vector">
                        <div className="absolute inset-[-9.09%_-4.17%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector18} />
                        </div>
                      </div>
                    </div>
                    <div className="bg-clip-text bg-gradient-to-r flex flex-col font-sans font-normal from-[56.415%] from-black h-[23px] justify-center leading-[0] relative shrink-0 text-base text-[transparent] to-[88.302%] to-[rgba(102,102,102,0)] w-[265px]" data-node-id="1:9835" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.5]">Reddit - “Desperately need advice..</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0" data-node-id="1:9836">
                    <div className="flex flex-col font-anaheim font-semibold h-[18px] justify-center leading-[0] relative shrink-0 text-black text-lg text-right w-[46px]" data-node-id="1:9837">
                      <p className="leading-[1.5]">12/18</p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-row content-stretch flex items-center justify-between px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:9838">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[267px]" data-node-id="1:9839">
                    <div className="relative shrink-0 size-[32px]" data-node-id="1:9840" data-name="EnvelopeSimple">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretCircleLeft} />
                      <div className="absolute inset-[21.88%_12.5%]" data-node-id="I1:9840;9575:21869" data-name="Vector">
                        <div className="absolute inset-[-5.56%_-4.17%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector17} />
                        </div>
                      </div>
                      <div className="absolute inset-[21.88%_12.5%_43.75%_12.5%]" data-node-id="I1:9840;9575:21870" data-name="Vector">
                        <div className="absolute inset-[-9.09%_-4.17%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector18} />
                        </div>
                      </div>
                    </div>
                    <div className="bg-clip-text bg-gradient-to-r flex flex-col font-sans font-normal from-[56.415%] from-black h-[23px] justify-center leading-[0] relative shrink-0 text-base text-[transparent] to-[88.302%] to-[rgba(102,102,102,0)] w-[265px]" data-node-id="1:9841" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.5]">Reddit - “Desperately need advice..</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0" data-node-id="1:9842">
                    <div className="flex flex-col font-anaheim font-semibold h-[18px] justify-center leading-[0] relative shrink-0 text-black text-lg text-right w-[46px]" data-node-id="1:9843">
                      <p className="leading-[1.5]">12/18</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#eee] content-stretch flex items-center justify-between px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:9844">
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[267px]" data-node-id="1:9845">
                    <div className="relative shrink-0 size-[32px]" data-node-id="1:9846" data-name="EnvelopeSimple">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCaretCircleLeft} />
                      <div className="absolute inset-[21.88%_12.5%]" data-node-id="I1:9846;9575:21869" data-name="Vector">
                        <div className="absolute inset-[-5.56%_-4.17%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector17} />
                        </div>
                      </div>
                      <div className="absolute inset-[21.88%_12.5%_43.75%_12.5%]" data-node-id="I1:9846;9575:21870" data-name="Vector">
                        <div className="absolute inset-[-9.09%_-4.17%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector18} />
                        </div>
                      </div>
                    </div>
                    <div className="bg-clip-text bg-gradient-to-r flex flex-col font-sans font-normal from-[56.415%] from-black h-[23px] justify-center leading-[0] relative shrink-0 text-base text-[transparent] to-[88.302%] to-[rgba(102,102,102,0)] w-[265px]" data-node-id="1:9847" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.5]">Reddit - “Desperately need advice..</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0" data-node-id="1:9848">
                    <div className="flex flex-col font-anaheim font-semibold h-[18px] justify-center leading-[0] relative shrink-0 text-black text-lg text-right w-[46px]" data-node-id="1:9849">
                      <p className="leading-[1.5]">12/18</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}