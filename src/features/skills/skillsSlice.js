import { SKILLS } from "../../app/shared/SKILLS"

export const selectFeaturedSkill = () => {
    return SKILLS.find((skill) => skill.featured);
};

export const selectAllSkills = () => {
    return SKILLS;
};