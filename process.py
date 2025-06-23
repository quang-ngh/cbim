import csv
import json
import os
import gdown
from urllib.parse import urlparse

def process_csv_to_json(csv_file_path, save_dir, output_json_path):
    """
    Parse CSV file and download profile images, then create JSON output.
    
    Args:
        csv_file_path (str): Path to the input CSV file
        save_dir (str): Directory to save downloaded images
        output_json_path (str): Path for the output JSON file
    """
    # Create save directory if it doesn't exist
    os.makedirs(save_dir, exist_ok=True)
    
    members = []
    members_with_drive_links = []
    
    with open(csv_file_path, 'r', encoding='utf-8') as file:
        csv_reader = csv.DictReader(file)
        
        for idx, row in enumerate(csv_reader):
            first_line = row['First line'].strip()
            second_line = row['Second line'].strip()
            profile_picture_url = row['Profile picture'].strip()
            idx += 6 
            # Extract file ID from Google Drive URL
            if 'drive.google.com' in profile_picture_url and 'id=' in profile_picture_url:
                file_id = profile_picture_url.split('id=')[1]
                
                # Create filename based on the person's name
                safe_name = "".join(c for c in first_line if c.isalnum() or c in (' ', '-', '_')).rstrip()
                safe_name = safe_name.replace(' ', '_')
                image_filename = f"{safe_name}.jpg"
                image_path = os.path.join(save_dir, image_filename)
                
                # Create member entry with Google Drive link
                member_with_drive_link = {
                    "id": idx,
                    "personalPageUrl": "/",
                    "name": first_line,
                    "interest": second_line,
                    "profileImage": profile_picture_url,
                    "enrollYear": 2024,
                    "position": "PhD Students"
                }
                members_with_drive_links.append(member_with_drive_link)
                
                if os.path.exists(image_path):
                    print(f"Image already exists for {first_line}, skipping download")
                    # Create member entry with existing image path
                    member = {
                        "name": first_line,
                        "interest": second_line,
                        "profileImage": image_path,
                        "id": idx,
                        "personalPageUrl": "/",
                        "enrollYear": 2024,
                        "position": "PhD Students"
                    }
                    members.append(member)
                else:
                    try:
                        # Download image using gdown
                        gdown.download(id=file_id, output=image_path, quiet=False)
                        
                        # Create member entry
                        member = {
                            "id": idx,
                            "personalPageUrl": "/",
                            "name": first_line,
                            "interest": second_line,
                            "profileImage": image_path,
                            "enrollYear": 2024,
                            "position": "PhD Students"
                        }
                        members.append(member)
                        
                        print(f"Successfully processed: {first_line}")
                        
                    except Exception as e:
                        print(f"Error downloading image for {first_line}: {str(e)}")
                        # Still add member but with original URL
                        member = {
                            "id": dx,
                            "personalPageUrl": "/",
                            "name": first_line,
                            "interest": second_line,
                            "profileImage": profile_picture_url,
                            "enrollYear": 2024,
                        }
                        members.append(member)
            else:
                # If not a Google Drive URL, use original URL
                member = {
                    "id": idx,
                    "personalPageUrl": "/",
                    "name": first_line,
                    "interest": second_line,
                    "profileImage": profile_picture_url,
                    "enrollYear": 2024,
                    "position": "PhD Students"
                }
                members.append(member)
                members_with_drive_links.append(member)
    
    # Write to JSON file
    with open(output_json_path, 'w', encoding='utf-8') as json_file:
        json.dump(members, json_file, indent=2, ensure_ascii=False)
    
    # Write to JSON file with Google Drive links
    drive_links_json_path = output_json_path.replace('.json', '_drive_links.json')
    with open(drive_links_json_path, 'w', encoding='utf-8') as json_file:
        json.dump(members_with_drive_links, json_file, indent=2, ensure_ascii=False)
    
    print(f"Processing complete. JSON saved to: {output_json_path}")
    print(f"JSON with Google Drive links saved to: {drive_links_json_path}")
    return members, members_with_drive_links

# Example usage
if __name__ == "__main__":
    csv_file = "cbim_members.csv"
    save_directory = "src/utils/mock-data/images"
    output_json = "src/utils/mock-data/cbim_members_v2.json"
    
    process_csv_to_json(csv_file, save_directory, output_json)
