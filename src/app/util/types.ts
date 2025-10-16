export type AboutJobsLineType = "Title" | "Company" | "Location" | "Date Range" | "Bullet Point";
export type AboutSkillsLineType = "Bullet Point";
export type AboutEducationLineType = "Title" | "Subtitle" | "Location" | "Date Range" | "Bullet Point";
export type TranslationsLineType = "Title" | "Line";
export type ProjectsLineType = "Title" | "Git Repo" | "Image" | "Description";
export type ProjectsSmallLineType = "Image";

// Union of all possible line types
export type BlockLineType =
  | AboutJobsLineType
  | AboutSkillsLineType
  | AboutEducationLineType
  | TranslationsLineType
  | ProjectsLineType
  | ProjectsSmallLineType;

export type BlockLine = [delimiter: string, content: string]
export type Block = BlockLine[];
export type BlockList = Block[];


export interface BlockLineHelperProps {
  line: BlockLine;
  mapper: Map<string, string>;
}

export interface BlockProps {
  block: Block;
  mapperString: string;
}

export interface BlockListProps {
  blocks: Block[];
  mapper: string;
}
