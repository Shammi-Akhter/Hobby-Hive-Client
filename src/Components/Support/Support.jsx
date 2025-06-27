import React from 'react';

const Support = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:mt-10 text-gray-800 dark:text-gray-200">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">
                Need Help? We're Here for You!
            </h1>

            <p className="text-base sm:text-lg mb-6 text-center">
                Welcome to the HobbyHive Support Center. Whether you're having trouble joining a hiking group, 
                can't find your favorite book club, or need help starting your own painting circle — we’re here to help.
            </p>

            <div className="mb-8">
                <ul className="list-disc list-inside space-y-3 text-sm sm:text-base">
                    <li>💬 Questions about joining or creating a hobby group?</li>
                    <li>🧭 Trouble discovering communities that match your interests?</li>
                    <li>🎨 Want to suggest a new hobby category?</li>
                    <li>🔐 Issues with your account or profile?</li>
                </ul>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-md text-sm sm:text-base">
                <p className="font-semibold mb-1">📧 Email Support:</p>
                <p>support@hobbyhive.com</p>
            </div>
        </div>
    );
};

export default Support;
