const LINK_PREFIX = 'driveLink_';

export const getDriveLink = (category: string): string => {
    try {
        return localStorage.getItem(`${LINK_PREFIX}${category}`) || '';
    } catch (error) {
        console.error("Could not access localStorage:", error);
        return '';
    }
};

export const saveDriveLinks = (links: Record<string, string>) => {
    try {
        for (const category in links) {
            localStorage.setItem(`${LINK_PREFIX}${category}`, links[category]);
        }
    } catch (error) {
        console.error("Could not access localStorage:", error);
    }
};