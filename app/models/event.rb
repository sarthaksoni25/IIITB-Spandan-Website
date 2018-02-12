class Event < ActiveRecord::Base
  has_and_belongs_to_many :volunteers
  has_many :volunteer_requests
  has_attached_file :icon, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/def.png"
  validates_attachment_content_type :icon, content_type: /\Aimage\/.*\Z/
  #validates :vol_req, presence: true

  # If Individual event the returns all users who have reigstered
  # If Team event then returns all teams who have registered
  def get_registrations
  end

  # Returns a list of users who are spoc of this event
  def spocs
    users = User.where(:spoc_event_id=>self.event_id)
  end

  # Handling uniquness exception coming from db
    def save(*args)
      super
      rescue ActiveRecord::RecordNotUnique => error
        errors[:base] << "Please select Different preferences"
        false
      end

  # Returns a list of users who are volunteers for this event
  #def volunteers
  #  volunteers = User.where(:volunteer_event_id=>self.event_id)
  #end
  # Returns all the results related to this event.
  def results
  end
end
